import {
    Component, ElementRef, OnDestroy, OnInit, Renderer2,
    ViewChild
} from '@angular/core';
import { User } from '../../../models/User';
import { UserService } from '../../../shared/services/user.service';
import { AppService } from '../../../shared/services/app.service';

import { BoardService } from '../../../shared/services/board.service';
import { Subscription } from 'rxjs/Subscription';
import { ColorUtilClass } from '../../../shared/utils/colors.util';
import { transitions} from '../../../shared/_animations/transitions';
import { Router } from '@angular/router';



export const BOARD_MOCK = {
    title: 'Hall of Fame',
    info: 'Добро пожаловать в зал славы.\n' +
    '                Здесь мы храним время каждого кто был первым лицом планеты.\n' +
    '                Чем больше времени - тем выше в рейтинге. Если стать первым\n' +
    '                лицом планеты несколько раз - время суммируется.'
};




@Component({
    selector: 'board-component',
    templateUrl: 'board.component.html',
    animations: [transitions],
    // host:{'[@LToRTransition]':''}
})

export class BoardComponent implements OnInit, OnDestroy {
    public boardMock = BOARD_MOCK;



    public users: User[] = [new User()];
    public leader: User = new User();

    @ViewChild('leaderEl')
    public leaderEl: ElementRef;

    @ViewChild('leadersEl')
    public leadersEl: ElementRef;

    public _subs: Subscription = new Subscription();

    public currentUserId: string;
    public currentLeaderId: string;

    constructor(private boardService: BoardService,
                private userService: UserService,
                private appService: AppService,
                private router:Router) {
    }

    public async ngOnInit() {
        this.currentLeaderId = this.appService.url[0];
        this.currentUserId = this.appService.url[2];

        this._subs = this.appService.routerState.subscribe(() => {
            this.currentLeaderId = this.appService.url[0];
            this.currentUserId = this.appService.url[2];
            this.boardService.setCurrentUser();
        });

        let users = await this.userService.getUsers();
        this.mapUsers(users);
        this.userService.getLeaderUser();
        this.boardService.randomColor = ColorUtilClass.getRandomColor();


        this.boardService.deleteCurrentUser();
        this.boardService.setCurrentUser();
    }

    public mapUsers(users) {
        this.users = Object.assign([], users);
        this.leader = users[0];
        this.users.splice(0, 1);
    }

    public ngOnDestroy() {
        this._subs.unsubscribe();
    }
}

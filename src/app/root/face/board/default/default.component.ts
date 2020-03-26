import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/user.service';
import { Router } from '@angular/router';
import { BoardService } from '../../../../shared/services/board.service';

export const BOARD_MOCK = {
    title: 'Hall of Fame',
    info: 'Добро пожаловать в зал славы.\n' +
    '                Здесь мы храним время каждого кто был первым лицом планеты.\n' +
    '                Чем больше времени - тем выше в рейтинге. Если стать первым\n' +
    '                лицом планеты несколько раз - время суммируется.'
};

@Component({
    selector: 'default-component',
    templateUrl: 'default.component.html',
})

export class DefaultComponent implements OnInit {
    public boardMock = BOARD_MOCK;

    constructor(private userService: UserService,
                private router: Router,
                private boardService: BoardService) {
    }

    public ngOnInit() {
    }

    public async getBack() {
        const leader = await this.userService.getLeaderUser();
        this.router.navigate(['/', leader.id]).then();
    }
}

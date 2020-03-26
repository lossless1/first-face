import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppService } from './app.service';
import { User } from '../../models/User';
import { UserService } from './user.service';
import { ApiUser } from '../api/api.user';
import { ColorUtilClass } from '../utils/colors.util';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class FaceService {
    public currentUser: User = new User();

    public users: User[] = [new User()];

    public isShareOpen: boolean = false;
    public _subs: Subscription;

    constructor(private route: ActivatedRoute,
                private appService: AppService,
                private router: Router,
                private userService: UserService) {
        this._subs = appService.routerState.subscribe(() => {
            this.setCurrentUser();
            this.isFaceComponent();
        });
    }

    public isFaceComponent() {
        return !this.appService.url[1]
    }

    public deleteCurrentUser() {
        this.currentUser = new User();
    }

    public async setCurrentUser() {
        this.users = await this.userService.getUsers();
        if (this.appService.url[0]) {
            this.currentUser = this.users.find(user => {
                return this.appService.url[0] === user.id;
            });
        }
        return this.currentUser;
    }

    public getUserIndex() {
        let index = 0;
        this.users.find((user, key) => {
            index = key;
            return user.id === this.appService.url[0];
        });
        return index;
    }

    public isFirstUser() {
        return this.getUserIndex() === 0;
    }

    public isLastUser() {
        return this.getUserIndex() === this.users.length - 1;
    }

    public getPreviousIdUser() {
        let index = this.getUserIndex();
        return this.users[index + 1] ? this.users[index + 1].id : this.users[index].id;
    }

    public getNextIdUser() {
        let index = this.getUserIndex();
        return this.users[index - 1] ? this.users[index - 1].id : this.users[index].id;
    }

    public copyToClipBoard() {
        let textarea = document.createElement("textarea");
        textarea.textContent = window.location.href;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }

    public toggleShare() {
        this.isShareOpen = !this.isShareOpen;
    }

    public getUserImage() {
        return this.currentUser.image;
    }

}

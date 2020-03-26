import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from './user.service';
import { AppService } from './app.service';

@Injectable()
export class BoardService {
    public currentUser: User = new User();

    public users: User[] = [new User()];

    public randomColor:string;

    constructor(private userService: UserService,
                private appService: AppService) {
    }

    public deleteCurrentUser(){
        this.currentUser = new User();
    }

    public async setCurrentUser() {
        this.users = await this.userService.getUsers();
        if (this.appService.url[2]) {
            this.currentUser = this.users.find(user => {
                return this.appService.url[2] === user.id;
            });
        }
        return this.currentUser;
    }
}

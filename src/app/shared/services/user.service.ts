import { Injectable } from "@angular/core";
import { User } from "../../models/User";
import { ApiUser } from "../api/api.user";

@Injectable()
export class UserService {
    public users: User[] = [new User()];

    constructor(private apiUser: ApiUser) {}

    public getUsers(refresh: boolean = false): Promise<User[]> {
        return new Promise(resolve => {
            if (
                JSON.stringify(this.users) === JSON.stringify([new User()]) ||
                refresh
            ) {
                let users = this.apiUser.getUsers();
                return resolve(users);
                // .subscribe((users) => {
                //     console.log(users);
                //     this.users = users;
                //     return resolve(users);
                // });
            } else {
                resolve(this.users);
            }
        });
    }

    public async getLeaderUser(refresh: boolean = false): Promise<User> {
        const users = await this.getUsers();
        return users[0];
    }
}

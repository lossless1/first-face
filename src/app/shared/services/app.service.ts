import { Injectable } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { User } from "../../models/User";
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class AppService {
    public url: string[];
    public routerState: Subject<string[]> = new Subject<string[]>();

    public _subs: Subscription;

    constructor(public router: Router, public route: ActivatedRoute) {
        this.startListenUrl();
    }

    public startListenUrl() {
        this._subs = this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) {
                this.url = e.urlAfterRedirects.split("/");
                this.url.shift();
                this.routerState.next(this.url);
            }
        });
    }
}

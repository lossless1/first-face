import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AppGuard implements CanActivate, CanActivateChild, CanLoad {
    public error;

    constructor(private router: Router) {}

    public checkLogin(url: string) {}

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        // return this.checkLogin(state.url);
        return true;
    }

    public canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        //    return this.canActivate(route, state);
        return true;
    }

    public canLoad(route: Route) {
        // const url = `/${route.path}`;
        // return this.checkLogin(url);
        return true;
    }
}

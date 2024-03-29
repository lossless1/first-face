import {
    ActivatedRouteSnapshot,
    DetachedRouteHandle,
    RouteReuseStrategy
} from "@angular/router";

export class CustomStrategy extends RouteReuseStrategy {
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return true;
    }
    store(
        route: ActivatedRouteSnapshot,
        detachedTree: DetachedRouteHandle
    ): void {}
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return null;
    }
    shouldReuseRoute(
        future: ActivatedRouteSnapshot,
        curr: ActivatedRouteSnapshot
    ): boolean {
        return false;
    }
}

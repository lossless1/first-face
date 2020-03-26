import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { CookieConsentComponent } from "../utils/cookie-consent.util";
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from "@angular/common/http";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    public intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            headers: req.headers.set(`Accept`, `application/json`)
        });
        req = req.clone({
            headers: req.headers.set(
                `Authorization`,
                `Bearer ${CookieConsentComponent.getCookie("access_token")}`
            )
        });
        return next.handle(req);
    }
}

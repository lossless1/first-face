import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import * as Rx from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ConnectionBackend, RequestOptionsArgs } from './interfaces';

@Injectable()
export class HttpCustomService {

    public subjectLoader: any = new Rx.Subject<string>();
    public subjectError: any;

    constructor(private http: HttpClient) {
        this.subjectError = new Rx.Subject<string>();
    }

    public get(url): Observable<any> {
        return this.http.get(url).catch((err) => {
            return this.handleError(err);
        });
    }

    public post(url: string, data): Observable<any> {
        return this.http.post(url, data).catch((err) => {
            return this.handleError(err);
        });
    }

    public patch(url: string, data): Observable<any> {
        return this.http.patch(url, data).catch((err) => {
            return this.handleError(err);
        });
    }

    public delete(url: string): Observable<any> {
        return this.http.delete(url).catch((err) => {
            return this.handleError(err);
        });
    }

    public handleError(res: Response | any) {
        console.error(res.error);
        this.subjectError.next(res.error);
        return Observable.throw(res);
    }
}

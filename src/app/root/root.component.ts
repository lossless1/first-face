import { Component, OnDestroy, OnInit, } from '@angular/core';
import { HoldingService } from '../shared/services/holding.service';
import { faceTransition } from '../shared/_animations/face.transition';
import {
    animate, animateChild, group, query, sequence, style, transition,
    trigger
} from '@angular/animations';
import { Router, RouterOutlet } from '@angular/router';
import { transitions } from '../shared/_animations/transitions';
import { AppService } from '../shared/services/app.service';
import { Subscription } from 'rxjs/Subscription';

/**
 * Сделать бордер BECOME THE FIRST в board
 * Увеличить скорость анимации при открытии info
 */
@Component({
    selector: 'root-component',
    templateUrl: './root.component.html',
    animations: [transitions,faceTransition]
})
export class RootComponent implements OnInit, OnDestroy {

    public _subs: Subscription;

    constructor(private _router: Router,
                private appService: AppService) {

    }

    public ngOnInit() {
        console.log('Root component!');
    }

    public prepareRouteTransition(outlet: RouterOutlet): string | null {
        try {
            if (outlet.activatedRouteData.state) {
                return outlet.activatedRouteData.state;
            }
            const routeArr = this._router.url.slice(1).split('/');
            if (routeArr.length > 1) {
                return routeArr[1];
            } else {
                return routeArr[0];
            }
        } catch (e) {
            return '';
        }
    }

    public ngOnDestroy() {
        this._subs.unsubscribe();
    }
}

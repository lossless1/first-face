import {
    Component, OnInit,
    ViewEncapsulation
} from '@angular/core';
import { faceTransition } from './shared/_animations/face.transition';
import { Router } from '@angular/router';
import {
    animate, animateChild, group, query, style, transition,
    trigger
} from '@angular/animations';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    // animations: [faceTransition],
    animations: [
        faceTransition
    ],
})
export class AppComponent implements OnInit {
    name: string;

    constructor(private _router: Router) {

    }

    public ngOnInit() {
        console.log('App component!');
    }

    public prepRouteAnimation(outlet: any) {
        try {
            if (outlet.activatedRouteData.state) {
                return outlet.activatedRouteData.state;
            }
            return this._router.url;
        } catch (e) {
            return '';
        }
    }
}

import {
    Component,
    OnInit,
    ViewEncapsulation,
    OnDestroy
} from '@angular/core';

@Component({
    selector: 'footer-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
    ],
    templateUrl: './footer.component.html'
})

export class FooterComponent implements OnInit, OnDestroy {
    public ngOnInit() {

    }

    public ngOnDestroy() {
    }
}

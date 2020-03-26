import {
    Component,
    OnInit,
    ViewEncapsulation,
    OnDestroy
} from '@angular/core';

@Component({
    selector: 'header-component',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
    ],
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

    public ngOnInit() {
    }
}

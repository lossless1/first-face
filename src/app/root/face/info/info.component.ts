import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../../shared/services/app.service';
import { FaceService } from '../../../shared/services/face.service';
import { faceTransition } from '../../../shared/_animations/face.transition';
import { ColorUtilClass } from '../../../shared/utils/colors.util';

@Component({
    moduleId: module.id.toString(),
    selector: 'info-component',
    templateUrl: './info.component.html',
    animations: [faceTransition],
    // host: {'[@fadeInAnimation]': ''}
})
export class InfoComponent implements AfterContentInit {

    @ViewChild('wrapper')
    public wrapper: ElementRef;

    constructor(private route: ActivatedRoute,
                private appService: AppService,
                private faceService: FaceService) {
    }

    public ngAfterContentInit() {
        this.wrapper.nativeElement.style.backgroundColor = ColorUtilClass.getRandomColor();
    }
}

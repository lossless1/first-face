import { Component, OnInit } from "@angular/core";
import { FaceService } from "../../shared/services/face.service";
import { faceTransition } from "../../shared/_animations/face.transition";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "face-component",
    templateUrl: "./face.component.html",
    animations: [faceTransition],
    host: { "[@routeAnimation]": "" }
})
export class FaceComponent implements OnInit {
    constructor(private faceService: FaceService) {}

    public ngOnInit() {
        this.faceService.setCurrentUser();
    }

    public prepareRouteTransition(outlet: RouterOutlet): string | null {
        if (outlet && outlet.activatedRouteData.state) {
            return outlet.activatedRouteData.state;
        }
    }
}

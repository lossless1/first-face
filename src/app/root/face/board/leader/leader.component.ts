import { Component, Input, OnInit } from "@angular/core";
import { User } from "../../../../models/User";
import { FaceService } from "../../../../shared/services/face.service";
import { BoardService } from "../../../../shared/services/board.service";

@Component({
    selector: "leader-component",
    templateUrl: "leader.component.html"
})
export class LeaderComponent implements OnInit {
    @Input("currentLeader")
    public currentLeader: User;

    constructor(
        private faceService: FaceService,
        private boardService: BoardService
    ) {}

    public ngOnInit() {}
}

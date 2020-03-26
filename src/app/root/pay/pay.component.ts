import { AfterContentInit, Component, OnInit } from "@angular/core";
import { transitions } from "../../shared/_animations/transitions";
import {
    faceTransition,
    payTransition
} from "../../shared/_animations/face.transition";

export interface Step {
    name: string;
    message?: string;
    selected: boolean;
    links?: string[];
    isAnimate: string;
}

@Component({
    selector: "pay",
    templateUrl: "pay.component.html",
    animations: [payTransition]
    // host: {'[@fadeInAnimation]':''}
})
export class PayComponent implements OnInit {
    public stateAnimate: string = "none";

    public isInfoSteps() {
        const currentStep = this.steps.find((step, key) => {
            if (step.selected === true) {
                this.currentStepKey = key;
                return step.selected === true;
            }
        });
        if (currentStep) {
            const infoStep = this.infoSteps.find(
                iStep => this.currentStepKey === iStep
            );
            console.log(infoStep);

            return infoStep || false;
        } else {
            return false;
        }
    }

    public currentStepKey: number;
    public steps: Step[] = [
        {
            name: "sign",
            selected: false,
            isAnimate: "out"
        },
        {
            name: "photo",
            selected: false,
            isAnimate: "out"
        },
        {
            name: "name",
            selected: false,
            isAnimate: "out"
        },
        {
            name: "message",
            message: "",
            selected: false,
            isAnimate: "out"
        },
        {
            name: "link",
            selected: false,
            links: [],
            isAnimate: "out"
        },
        {
            name: "pay",
            selected: false,
            isAnimate: "out"
        }
    ];

    public infoSteps: number[] = [1, 2, 3, 4];

    public countSymbols: number = 500;

    constructor() {}

    public ngOnInit() {
        this.steps[0].selected = true;
        this.setOutTransition();
    }

    public setOutTransition() {
        console.log(this.currentStepKey + 1);
        for (let i = this.currentStepKey + 1; i < this.steps.length; i++) {
            this.steps[i].isAnimate = "out";
        }
        console.log(this.steps);
    }

    public nextStep() {
        this.resetSteps();
        this.steps[this.currentStepKey + 1]
            ? (this.steps[this.currentStepKey + 1].selected = true)
            : false;
        this.setOutTransition();
    }

    public deleteLink(i) {
        this.steps[4].links.splice(i, 1);
    }

    public addLink(ev) {
        if (this.steps[4].links.length < 5) {
            this.steps[4].links.push(ev.target.value);
        }
        ev.target.value = "";
    }

    public doTextAreaValueChange(ev) {
        this.steps[2].message = ev.target.value;
        this.countSymbols = 500 - this.steps[2].message.length;
    }

    public resetSteps(): boolean {
        this.steps.forEach(val => {
            val.selected = false;
            val.isAnimate = "in";
        });
        return true;
    }

    public goToStep(step) {
        this.resetSteps();

        this.steps[step].selected = true;
        this.setOutTransition();
    }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'error',
    templateUrl: './page.not.found.component.html'
})
export class PageNotFoundComponent implements OnInit{
    constructor(private location:Location){

    }
    ngOnInit(){

    }
    back(){
        this.location.back();
    }
}
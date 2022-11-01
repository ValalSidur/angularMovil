import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

@Component({
    selector: 'grupos',
    templateUrl: './grupos.component.html'
})

export class GruposComponent implements OnInit {
    constructor(){ }

    ngOnInit(): void{
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView()
        sideDrawer.showDrawer()
      }
}

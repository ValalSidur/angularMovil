import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { registerElement } from '@nativescript/angular'

registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {
  @ViewChild("MapView") mapView: ElementRef;

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onMarReady(event): void {
    console.log("Map ready");
  }
}

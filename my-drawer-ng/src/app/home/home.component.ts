import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, ImageAsset } from '@nativescript/core'
import * as camera from "nativescript-camera";


@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
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

  onButtonTap(): void{
    camera.requestPermissions().then(
      function success(){
        const options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true };
        camera.takePicture(options).
          then((ImageAsset) => {
            console.log("Tamaño: "+ImageAsset.options.width+"x"+ImageAsset.options.height);
            console.log("keepAspectRatio: "+ImageAsset.options.keepAspectRatio);
            console.log("Foto guardada!");
          }).catch((err) => {
            console.log("error -> "+err.mesage);
          });
      },
      function failure(){
        console.log("Permiso de camara no aceptado por el usuario");
      }
    )
  }
}

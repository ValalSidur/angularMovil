import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  usuario;
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    //https://blog.nativescript.org/client-side-storage-in-nativescript-applications/
    /**El contenido del profe para esta sección esta deprecado, comparto nueva versión */
    const appSettings = require('@nativescript/core/application-settings');
    this.usuario = appSettings.setString("usuario","Messi");
    console.log(appSettings.getString('usuario'));
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}

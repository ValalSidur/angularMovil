import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core';
import { NoticiasService } from '../domain/noticias.service';

@Component({
  selector: 'Search',
  moduleId: module.id,
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  nombre = {nombre: {nombre: {nombre: "pepe"}}};
  constructor(public noticias: NoticiasService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.noticias.agregar("hola!");
    this.noticias.agregar("hola1!");
    this.noticias.agregar("hola2!");
    console.log("Se agrego todo");
    console.log(this.noticias);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}

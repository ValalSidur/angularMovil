import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, View } from '@nativescript/core';
import { NoticiasService } from '../domain/noticias.service';
import * as Toast from 'nativescript-toasts';

@Component({
  selector: 'Search',
  moduleId: module.id,
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  nombre = {nombre: {nombre: {nombre: "pepe"}}};
  @ViewChild("layout") layout: ElementRef;
  resultados: Array<string>;

  constructor(public noticias: NoticiasService) {
    // Use the component constructor to inject providers.
  }

  doLater(fn){ setTimeout(fn, 1000);}

  ngOnInit(): void {
    this.noticias.agregar("prueba 1");
    this.noticias.agregar("prueba 2");
    this.noticias.agregar("prueba 3");
    this.noticias.agregar("prueba 4");
    /*
    this.doLater(() => 
      Dialogs.action("Mensaje", "Cancelar!", ["Opcion1", "Opcion2"])
      .then((result) => {
        console.log("resultado:"+ result);
        if(result === "Opcion1"){
          this.doLater(() => 
          Dialogs.alert({title: "titulo 1", message:"mje 1", okButtonText: "btn 1"})
          .then(() => console.log("Cerrado 1!")));
        }
        else if(result === "Opcion 2"){
          this.doLater(() => Dialogs.alert({title: "Titutlo 2", message: "mje 2", okButtonText: "btn 2"}).then(() => console.log("Cerrado 2!")));
        }
      }))
    */
   const toastOptions: Toast.ToastOptions = {text: "hello world", duration: Toast.DURATION.SHORT};
   this.doLater(() => Toast.show(toastOptions));
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onItemTap(x): void{
    console.dir(x);
  }

  buscarAhora(s: string){
      this.resultados = this.noticias.buscar().filter((x) => x.indexOf(s) >= 0);

      const layout = <View>this.layout.nativeElement;
      layout.animate({
        backgroundColor: new Color("blue"),
        duration: 300,
        delay: 150
      }).then(() => layout.animate({
        backgroundColor: new Color("white"),
        duration: 300,
        delay: 150
      }));
  }
}

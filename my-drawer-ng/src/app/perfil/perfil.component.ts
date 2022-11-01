import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

@Component({
    selector: 'perfil',
    templateUrl: './perfil.component.html'
})

export class PerfilComponent implements OnInit {
    nombre: string;
    public perfiles: Array<string> = [];

    constructor(){ }

    ngOnInit(): void{
        console.log(this.nombre);
    }

    onAddPerfil(){
        console.log(this.nombre);
        this.perfiles.push(this.nombre);
        this.nombre = "";
    }

    onRemoveNombre(index){
        this.perfiles.splice(index, 1);
    }
    
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>Application.getRootView()
        sideDrawer.showDrawer()
      }
}

import { Component, EventEmitter, Output, OnInit, Input } from "@angular/core";
import { inputType } from "@nativescript/core";

@Component({
    selector: 'SearchForm',
    moduleId: module.id,
    template:`
        <TextField [(ngModel)]="textFieldValue" hint="Enter text..."></TextField>
        <Button text="Buscar" (tap)="onButtonTap()"></Button>
        `
})
export class SearchFormComponent {
    textFieldValue: string = "";
    @Output() buscar: EventEmitter<string> = new EventEmitter();
    @Input() inicial: string;

    ngOnInit(): void{
        this.textFieldValue = this.inicial;
    }

    onButtonTap(): void {
        console.log(this.textFieldValue);
        if(this.textFieldValue.length > 2){
            this.buscar.emit(this.textFieldValue);
        }
    }
}
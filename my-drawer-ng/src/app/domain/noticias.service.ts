import { Injectable } from '@angular/core';
import { getJSON, request } from '@nativescript/core/http';
const sqlite = require("nativescript-sqlite");

@Injectable()
export class NoticiasService {
    private noticias: Array<string> = [];
    api: string = "http://localhost:3000";
    agregar(s: string){
        return request({
            url: this.api+"/favs",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
                nuevo: s
            })
        });
        //this.noticias.push(s);
    }

    favs(){
        return getJSON(this.api+"/favs");
    }

    buscar(s: string){
        this.getBd((db) => {
            db.execSQL("insert into logs (texto) values (?)",s,
            (err, id) => console.log("nuevo id: ", id))
        }, () => console.log("error on getDB"));
        //return this.noticias;
        return getJSON(this.api+"/get?q=" + s);
    }

    constructor(){
        this.getBd((db) => {
            console.dir(db);
            db.each("select * from logs", 
                (err, fila) => console.log("fila: ", fila),
                (err, totales) => console.log("Filas totales: ", totales));
        }, () => console.log("error on getDB"));
    }
    getBd(fnok, fnError){
        return new sqlite("mi_db_logs", (err, db) => {
            if(err){
                console.error("error al abrir db!", err);
            }
            else{
                console.log("esta la bd abierta? ", db.isOpen() ? "si":"no");
                db.execSQL("CREATE TABLE IF NOT EXISTS logs(id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT)")
                .then((id) => {
                    console.log("Create table OK");
                    fnok(db);
                },(error) => {
                    console.log("create table error", error);
                    fnError(error);
                })
            }
        });
    }
}
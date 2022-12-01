import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule, NativeScriptFormsModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'

import { EffectsModule } from '@ngrx/effects'
import { ActionReducerMap, StoreModule as NgRxStoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NoticiasService } from './domain/noticias.service'

//Redurcers de Noticias
import { intializeNoticiasState, NoticiasEffects, NoticiasState, reducersNoticias } from './domain/noticias-state.model'

export interface AppState{
  noticias: NoticiasState;
}

const reducers: ActionReducerMap<AppState> = {
  noticias: reducersNoticias
};

const reducersInitialState = {
  noticias: intializeNoticiasState()
};
//fin redux

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptFormsModule, AppRoutingModule, NativeScriptModule, NativeScriptUISideDrawerModule,
  NgRxStoreModule.forRoot(reducers, {initialState: reducersInitialState}),
  EffectsModule.forRoot([NoticiasEffects])],
  providers:[NoticiasService],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

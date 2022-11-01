import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { GruposRoutingModule } from './grupos-routing.module'
import { GruposComponent } from './grupos.component'

@NgModule({
  imports: [NativeScriptCommonModule, GruposRoutingModule],
  declarations: [GruposComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class GruposModule {}

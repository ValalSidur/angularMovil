import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from '@nativescript/angular'
import { SearchRoutingModule } from './search-routing.module'
import { SearchComponent } from './search.component'

import { SearchFormComponent } from "./Form/search-form.component";

@NgModule({
  imports: [NativeScriptCommonModule, SearchRoutingModule, NativeScriptFormsModule],
  declarations: [SearchComponent, SearchFormComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {}

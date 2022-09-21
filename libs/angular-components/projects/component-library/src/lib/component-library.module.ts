import {NgModule} from '@angular/core';
import {ComponentLibraryComponent} from './component-library.component';
import {DIRECTIVES} from './generated';
import {defineCustomElements} from '@vrapalis/core-components/loader';

defineCustomElements();

@NgModule({
  declarations: [
    ComponentLibraryComponent,
    ...DIRECTIVES
  ],
  imports: [],
  exports: [
    ComponentLibraryComponent,
    ...DIRECTIVES
  ]
})
export class ComponentLibraryModule {
}

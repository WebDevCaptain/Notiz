import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';

import { CreditsComponent } from './credits.component';

@NgModule({
  declarations:
  [
    CreditsComponent
  ],
  imports:
  [
    BrowserModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [CreditsComponent]
})
export class CreditsModule { }

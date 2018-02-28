import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';
import { CommonModule } from '@angular/common';

import { CreditsComponent } from './credits.component';

@NgModule({
  declarations:
  [
    CreditsComponent
  ],
  imports:
  [
    BrowserModule,
    NgxElectronModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [CreditsComponent]
})
export class CreditsModule { }

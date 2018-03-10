import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { NotesComponent } from './notes/notes.component';
import { CreditsComponent } from './credits/credits.component';
import { SpecificNoteComponent } from './specific-note/specific-note.component';

@NgModule({
  declarations:
  [
    AppComponent,
    AboutComponent,
    NotesComponent,
    CreditsComponent,
    SpecificNoteComponent
  ],
  imports:
  [
    BrowserModule,
    NgxElectronModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NotesComponent } from './notes/notes.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

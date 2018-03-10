import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NotesComponent } from './notes/notes.component';
import { SpecificNoteComponent } from './specific-note/specific-note.component';

const routes: Routes =
[
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'notes/specific_note',
    component: SpecificNoteComponent
  }
];

@NgModule
({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

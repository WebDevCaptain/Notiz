import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes =
[
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  }
];

@NgModule
({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

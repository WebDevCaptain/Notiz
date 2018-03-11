import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }

  notes : string;
  // [
  //   {
  //     "title": "Note1",
  //     "content": "Lala1",
  //     "foregroundColor": "#111",
  //     "backgroundColor": "#222"
  //   },
  //   {
  //     "title": "Note2",
  //     "content": "Lala2",
  //     "foregroundColor": "#222",
  //     "backgroundColor": "#333"
  //   },
  //   {
  //     "title": "Note3",
  //     "content": "Lala3",
  //     "foregroundColor": "#333",
  //     "backgroundColor": "#444"
  //   }
  // ];

  // localStorage.setItem('notes', JSON.stringify(this.notes));
  // localStorage.clear();

  ngOnInit()
  {
    this.notes = localStorage.getItem('notes');
    console.log('notes: ', JSON.parse(this.notes));
  }
}

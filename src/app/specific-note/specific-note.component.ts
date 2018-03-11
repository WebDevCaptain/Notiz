import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-specific-note',
  templateUrl: './specific-note.component.html',
  styleUrls: ['./specific-note.component.css']
})
export class SpecificNoteComponent implements OnInit
{
  constructor() { }

  ngOnInit()
  {
    $(document).ready(function()
    {
      // $("textarea").keyup();
    });
  }
}

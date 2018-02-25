import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component(
{
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit
{
  constructor(private electronService: ElectronService) {}

  title = "Notiz";
  iconPath = "./assets/icon.png";

  aboutDescription = ["A small note app developed", "using Angular, ElectronJS and CSS Grid system."];
  aboutInfo = "Click to create a new note...";

  ngOnInit()
  {

  }

}

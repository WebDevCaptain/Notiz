import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  constructor(private electronService: ElectronService) {}

  title = "Notiz";
  iconPath = "./assets/icon.png";

  aboutDescription = ["A small note app developed", "using Angular, ElectronJS and CSS Grid system."];
  aboutInfo = "Click to create a new note...";

  AboutClick()
  {
    this.electronService.ipcRenderer.send("about",0);
  }
  NotesClick()
  {
    this.electronService.ipcRenderer.send("notes",0);
  }

  CreditsClick()
  {
    this.electronService.ipcRenderer.send("credits",0);
  }

  MinimizeClick()
  {
    this.electronService.ipcRenderer.send("minimize",0);
  }

  MaximizeClick()
  {
    this.electronService.ipcRenderer.send("maximize",0);
  }

  QuitClick()
  {
    this.electronService.ipcRenderer.send("quit",0);
  }
}

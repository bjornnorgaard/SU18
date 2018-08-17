import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  installPromptEvent;

  constructor() { }

  ngOnInit() {
    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault();
      this.installPromptEvent = event;
    });
  }

  install() {
    this.installPromptEvent.prompt();
    this.installPromptEvent.userChoice.then(choice => {
      this.installPromptEvent = null;
    });
  }

}

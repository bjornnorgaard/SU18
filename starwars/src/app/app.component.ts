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
    console.log('init')
    window.addEventListener('beforeinstallprompt', event => {
      console.log('event')
      event.preventDefault();
      this.installPromptEvent = event;
    });
  }

  install() {
    console.log('install')
    this.installPromptEvent.prompt();
    this.installPromptEvent.userChoice.then(choice => {
      this.installPromptEvent = null;
    });
  }

}

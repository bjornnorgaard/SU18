import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if ('serviceWorker' in navigator && environment.production) {
  navigator.serviceWorker.register('./sw.js').then(reg => {
    console.log('serviceWorker registered');
  }, function (err) {
    console.log('failed to register serviceWorker');
  });
}

// let installPromptEvent;
// const btnInstall = document.querySelector('#install-button');

// window.addEventListener('beforeinstallprompt', event => {
//   event.preventDefault();
//   installPromptEvent = event;
//   btnInstall['disabled'] = false;
// });

// btnInstall.addEventListener('click', () => {
//   btnInstall['disabled'] = true;
//   installPromptEvent.prompt();
//   installPromptEvent.userChoice.then(choice => {
//     installPromptEvent = null;
//   });
// });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

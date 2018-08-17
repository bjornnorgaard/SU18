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

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

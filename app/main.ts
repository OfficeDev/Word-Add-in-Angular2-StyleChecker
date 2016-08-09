// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/* 
   This file bootstraps the root component: AppComponent and Angular 2 routing.
*/

import { bootstrap } from '@angular/platform-browser-dynamic';
import { ExceptionHandler } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

function launch() {

  bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: ExceptionHandler, useClass: ExceptionLog }
  ])
    .catch(err => console.error(err));
}

// Postpone bootstrapping the application until Office.js has completely loaded
// to avoid a clash between Office.js and the Angular 2 RC4 router.
if (window.hasOwnProperty('Office') && window.hasOwnProperty('Word')) {

  // Application-specific initialization code goes into a function that is
  // assigned to the Office.initialize event and runs after the Office.js initializes.
  Office.initialize = reason => {
    launch();
  }
}
else {
  launch();
}

class ExceptionLog extends ExceptionHandler {
  call(exception: any, stackTrace?: any, reason?: string) {
    console.error(exception);
  };
}
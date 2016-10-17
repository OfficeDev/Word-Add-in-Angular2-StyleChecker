// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/* 
   This file bootstraps the root module: AppModule.
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

function launch() {
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);
}

if (window.hasOwnProperty('Office') && window.hasOwnProperty('Word')) {

  // Application-specific initialization code goes into a function that is
  // assigned to the Office.initialize event and runs after the Office.js initializes.
  // Bootstrapping of the AppModule must come AFTER Office has initialized.
  Office.initialize = reason => {
    launch();
  }
}
else {
  launch();
}

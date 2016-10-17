// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.
"use strict";
/*
   This file bootstraps the root module: AppModule.
*/
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
function launch() {
    var platform = platform_browser_dynamic_1.platformBrowserDynamic();
    platform.bootstrapModule(app_module_1.AppModule);
}
if (window.hasOwnProperty('Office') && window.hasOwnProperty('Word')) {
    // Application-specific initialization code goes into a function that is
    // assigned to the Office.initialize event and runs after the Office.js initializes.
    // Bootstrapping of the AppModule must come AFTER Office has initialized.
    Office.initialize = function (reason) {
        launch();
    };
}
else {
    launch();
}
//# sourceMappingURL=main.js.map
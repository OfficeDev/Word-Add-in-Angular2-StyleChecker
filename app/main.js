// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
   This file bootstraps the root component: AppComponent and Angular 2 routing.
*/
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
function launch() {
    platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
        app_routes_1.APP_ROUTER_PROVIDERS,
        { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
        { provide: core_1.ExceptionHandler, useClass: ExceptionLog }
    ])
        .catch(function (err) { return console.error(err); });
}
// Postpone bootstrapping the application until Office.js has completely loaded
// to avoid a clash between Office.js and the Angular 2 RC4 router.
if (window.hasOwnProperty('Office') && window.hasOwnProperty('Word')) {
    // Application-specific initialization code goes into a function that is
    // assigned to the Office.initialize event and runs after the Office.js initializes.
    Office.initialize = function (reason) {
        launch();
    };
}
else {
    launch();
}
var ExceptionLog = (function (_super) {
    __extends(ExceptionLog, _super);
    function ExceptionLog() {
        _super.apply(this, arguments);
    }
    ExceptionLog.prototype.call = function (exception, stackTrace, reason) {
        console.error(exception);
    };
    ;
    return ExceptionLog;
}(core_1.ExceptionHandler));
//# sourceMappingURL=main.js.map
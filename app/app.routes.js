// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.
"use strict";
/*
  This file configures the routes of the application.
*/
var router_1 = require('@angular/router');
var find_and_replace_component_1 = require('./find-and-replace/find-and-replace.component');
var instruction_steps_component_1 = require('./instructions/instruction-steps.component');
var settings_component_1 = require('./settings/settings.component');
// Gets the local storage setting that specifies when to skip instructions
function fetchInstructionSetting() {
    // Use the application's domain/port on all storage keys to avoid name clashes.
    var keyStem = location.hostname + (location.port ? ':' + location.port : '');
    return window.localStorage.getItem(keyStem + "StyleCheckerAddinShowInstructions");
}
function setRoutesArray() {
    var routesArray = [
        { path: 'instruction-steps', component: instruction_steps_component_1.InstructionStepsComponent },
        { path: 'settings', component: settings_component_1.SettingsComponent },
        { path: 'find-and-replace', component: find_and_replace_component_1.FindAndReplaceComponent }
    ];
    var defaultRoute = { path: '', redirectTo: 'instruction-steps', pathMatch: 'full' };
    // If a user has set the application to skip the instruction view,
    // then set the default route to the search and replace view.
    if (fetchInstructionSetting() === "OnlyFirstTime") {
        defaultRoute = { path: '', redirectTo: 'find-and-replace', pathMatch: 'full' };
    }
    routesArray.push(defaultRoute);
    return routesArray;
}
exports.routes = setRoutesArray();
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map
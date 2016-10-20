// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
  This file defines the routes of the application.
*/
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var find_and_replace_component_1 = require('./find-and-replace/find-and-replace.component');
var instruction_steps_component_1 = require('./instructions/instruction-steps.component');
var settings_component_1 = require('./settings/settings.component');
function fetchInstructionSetting() {
    return window.localStorage.getItem("StyleCheckerAddinShowInstructions");
}
function setRoutesArray() {
    var routesArray = [
        { path: 'instruction-steps', component: instruction_steps_component_1.InstructionStepsComponent },
        { path: 'settings', component: settings_component_1.SettingsComponent },
        { path: 'find-and-replace', component: find_and_replace_component_1.FindAndReplaceComponent }
    ];
    var defaultRoute = { path: '', redirectTo: '/instruction-steps', pathMatch: 'full' };
    // If a user has set the application to skip the instruction view,
    // then set the default route to the search and replace view.
    if (fetchInstructionSetting() === "OnlyFirstTime") {
        defaultRoute = { path: '', redirectTo: '/find-and-replace', pathMatch: 'full' };
    }
    routesArray.unshift(defaultRoute);
    return routesArray;
}
var routes = setRoutesArray();
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, 
                // Use hash location strategy in an Office Add-in
                { useHash: true })],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map
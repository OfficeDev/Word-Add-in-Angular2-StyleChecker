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
  This file defines the root component of the application.
*/
/// <reference path="../typings/index.d.ts" />
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
// The WordDocumentService provides methods for manipulating the document.
var word_document_service_1 = require('./services/word-document/word.document.service');
// The SettingsStorageService provides CRUD operations on application settings.
var settings_storage_service_1 = require('./services/settings-storage/settings.storage.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sc-app',
            template: "\n    <div>        \n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n     </div>\n     ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [word_document_service_1.WordDocumentService, settings_storage_service_1.SettingsStorageService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
"use strict";
// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsStorageService = void 0;
/*
  This file defines a service that provides CRUD operations on application settings.
*/
var core_1 = require("@angular/core");
var SettingsStorageService = /** @class */ (function () {
    function SettingsStorageService() {
    }
    SettingsStorageService.prototype.store = function (specificKey, value) {
        window.localStorage.setItem(specificKey, value);
    };
    SettingsStorageService.prototype.fetch = function (specificKey) {
        return window.localStorage.getItem(specificKey);
    };
    SettingsStorageService.prototype.remove = function (specificKey) {
        window.localStorage.removeItem(specificKey);
    };
    SettingsStorageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SettingsStorageService);
    return SettingsStorageService;
}());
exports.SettingsStorageService = SettingsStorageService;
//# sourceMappingURL=settings.storage.service.js.map
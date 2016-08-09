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
  This file defines a component that provides a button that opens a contextual menu.
*/
var core_1 = require('@angular/core');
var ContextualMenuButtonComponent = (function () {
    function ContextualMenuButtonComponent() {
    }
    // Future enhancement: Use more Angular-centric methods to reference the menu,
    // in place of the getElementById.
    ContextualMenuButtonComponent.prototype.ngOnInit = function () {
        $('#myButton').click(function () {
            document.getElementById("myDropdown").classList.toggle("is-open");
        });
    };
    ContextualMenuButtonComponent = __decorate([
        core_1.Component({
            selector: 'sc-contextual-menu-button',
            templateUrl: 'app/shared/contextual-menu-button/contextual.menu.button.component.html',
            styleUrls: ['app/shared/contextual-menu-button/contextual.menu.button.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ContextualMenuButtonComponent);
    return ContextualMenuButtonComponent;
}());
exports.ContextualMenuButtonComponent = ContextualMenuButtonComponent;
//# sourceMappingURL=contextual.menu.button.component.js.map
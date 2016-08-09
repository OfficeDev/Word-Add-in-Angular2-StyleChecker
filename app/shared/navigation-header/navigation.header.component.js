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
  This file defines a navigation header for a task pane page. It is based on
  the navigation sample, created by the Modern Assistance Experience Developer
  Docs team. Along with other samples, it is in the Office-Add-in-UX-Design-Patterns-Code
  repo:  https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code
*/
var core_1 = require('@angular/core');
// Import the child components that will be in the header.
var contextual_menu_button_component_1 = require('../contextual-menu-button/contextual.menu.button.component');
var fabric_contextual_menu_wrapper_component_1 = require('../office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component');
var NavigationHeaderComponent = (function () {
    function NavigationHeaderComponent() {
    }
    NavigationHeaderComponent = __decorate([
        core_1.Component({
            selector: 'sc-navigation-header',
            templateUrl: 'app/shared/navigation-header/navigation.header.component.html',
            styleUrls: ['app/shared/navigation-header/navigation.header.component.css'],
            directives: [contextual_menu_button_component_1.ContextualMenuButtonComponent, fabric_contextual_menu_wrapper_component_1.FabricContextualMenuWrapperComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationHeaderComponent);
    return NavigationHeaderComponent;
}());
exports.NavigationHeaderComponent = NavigationHeaderComponent;
//# sourceMappingURL=navigation.header.component.js.map
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
  This file brings together all of the required modules and components and identifies
  the component to be bootstrapped.
*/
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_module_1 = require('./app-routing.module');
// Import all the custom components.
var app_component_1 = require('./app.component');
var find_and_replace_component_1 = require('./find-and-replace/find-and-replace.component');
var instruction_steps_component_1 = require('./instructions/instruction-steps.component');
var settings_component_1 = require('./settings/settings.component');
var button_component_1 = require('./shared/button/button.component');
var navigation_header_component_1 = require('./shared/navigation-header/navigation.header.component');
var brand_footer_component_1 = require('./shared/brand-footer/brand.footer.component');
var contextual_menu_button_component_1 = require('./shared/contextual-menu-button/contextual.menu.button.component');
var fabric_contextual_menu_wrapper_component_1 = require('./shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component');
var fabric_textfield_wrapper_component_1 = require('./shared/office-fabric-component-wrappers/fabric.textfield.wrapper.component');
// The WordDocumentService provides methods for manipulating the document.
var word_document_service_1 = require('./services/word-document/word.document.service');
// The SettingsStorageService provides CRUD operations on application settings.
var settings_storage_service_1 = require('./services/settings-storage/settings.storage.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                find_and_replace_component_1.FindAndReplaceComponent,
                instruction_steps_component_1.InstructionStepsComponent,
                settings_component_1.SettingsComponent,
                button_component_1.ButtonComponent,
                navigation_header_component_1.NavigationHeaderComponent,
                brand_footer_component_1.BrandFooterComponent,
                contextual_menu_button_component_1.ContextualMenuButtonComponent,
                fabric_contextual_menu_wrapper_component_1.FabricContextualMenuWrapperComponent,
                fabric_textfield_wrapper_component_1.FabricTextFieldWrapperComponent
            ],
            providers: [
                word_document_service_1.WordDocumentService,
                settings_storage_service_1.SettingsStorageService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
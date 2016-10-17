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
  The file defines an Angular 2 component to wrap the Fabric ContextualMenu component.
*/
///<reference path="../../../typings/index.d.ts"/>
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// The WordDocumentService provides methods for manipulating the document.
var word_document_service_1 = require('../../services/word-document/word.document.service');
var FabricContextualMenuWrapperComponent = (function () {
    function FabricContextualMenuWrapperComponent(wordDocument, router, element) {
        this.wordDocument = wordDocument;
        this.router = router;
        this.element = element;
    }
    FabricContextualMenuWrapperComponent.prototype.insertSampleContent = function () {
        this.wordDocument.replaceDocumentContent([
            "Office Add-ins",
            "An OAI runs in an Office application and can interact with data in a document or mail item. As one observer said:",
            "\t\"The new OAI model is the cat's meow.\"",
            "An OAI is a web app that you can host anywhere. It runs in an Office application. A manifest.xml file specifies where the web app is located and how it should appear.",
            "You can find an OAI sample or two (or many) in the OfficeDev organization on GitHub."
        ]);
        this.closeMenu();
    };
    FabricContextualMenuWrapperComponent.prototype.closeMenu = function () {
        var menuElement = this.element.nativeElement // = this <of-contextual-menu>
            .children[0]; // = <ul class="ms-ContextualMenu" ... >
        menuElement.classList.remove("is-open");
    };
    FabricContextualMenuWrapperComponent = __decorate([
        core_1.Component({
            selector: 'of-contextual-menu',
            templateUrl: 'app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.html',
            styleUrls: ['app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.css']
        }), 
        __metadata('design:paramtypes', [word_document_service_1.WordDocumentService, router_1.Router, core_1.ElementRef])
    ], FabricContextualMenuWrapperComponent);
    return FabricContextualMenuWrapperComponent;
}());
exports.FabricContextualMenuWrapperComponent = FabricContextualMenuWrapperComponent;
//# sourceMappingURL=fabric.contextual.menu.wrapper.component.js.map
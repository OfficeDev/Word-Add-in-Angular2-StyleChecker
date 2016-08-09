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
    //  @ViewChild('myDropdown') menu: ElementRef;
    function FabricContextualMenuWrapperComponent(wordDocument, router) {
        this.wordDocument = wordDocument;
        this.router = router;
    }
    FabricContextualMenuWrapperComponent.prototype.insertSampleContent = function () {
        this.wordDocument.replaceDocumentContent([
            "Travel in the Czech Republic",
            "If you haven't considered the Czech Republic for your next vacation, it is time that you did. As Elliot McFadden puts it:",
            "\t\"The Czech Republic combines the best of Eastern and Western Europe.\"",
            "Europe's destructive wars of the 20th Century largely bypassed the lands that now make up the Czech Republic, so when you visit a castle in the Czech Republic, it is not the ruin of a castle but an actual castle, probably still inhabited or in use by the government.",
            "The most famous Czech was the renowned writer Franz Kafka. Don't miss his pink bricked high school in the center of the Czech Republic's capital, Prague."
        ]);
    };
    // After the contexual menu has fully rendered, create a Fabric ContextualMenu object for it.
    // (Future enhancement: Use Angular 2 ElementRef, instead of jQuery, to reference the elment.)
    FabricContextualMenuWrapperComponent.prototype.ngAfterViewInit = function () {
        // this.menu.nativeElement. .ContextualMenu();
        if ($.fn.ContextualMenu) {
            $('.ms-ContextualMenu').ContextualMenu();
        }
    };
    FabricContextualMenuWrapperComponent = __decorate([
        core_1.Component({
            selector: 'of-contextual-menu',
            templateUrl: 'app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            styleUrls: ['app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.css']
        }), 
        __metadata('design:paramtypes', [word_document_service_1.WordDocumentService, router_1.Router])
    ], FabricContextualMenuWrapperComponent);
    return FabricContextualMenuWrapperComponent;
}());
exports.FabricContextualMenuWrapperComponent = FabricContextualMenuWrapperComponent;
//# sourceMappingURL=fabric.contextual.menu.wrapper.component.js.map
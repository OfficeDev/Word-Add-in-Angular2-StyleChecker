// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
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
  This file defines a component that enables a search-and-replace functionality for
  the Word document.
*/
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// The WordDocumentService provides methods for manipulating the document.
var word_document_service_1 = require('../services/word-document/word.document.service');
// The SettingsStorageService provides CRUD operations on application settings..
var settings_storage_service_1 = require('../services/settings-storage/settings.storage.service');
var FindAndReplaceComponent = (function () {
    function FindAndReplaceComponent(wordDocument, settingsStorage, router) {
        this.wordDocument = wordDocument;
        this.settingsStorage = settingsStorage;
        this.router = router;
    }
    // Handle the event of a user entering text in the search box.
    FindAndReplaceComponent.prototype.onSearchTextEntered = function (message) {
        this.searchString = message;
    };
    // Handle the event of a user entering text in the replace box.
    FindAndReplaceComponent.prototype.onReplaceTextEntered = function (message) {
        this.replaceString = message;
    };
    // Handle the event of a user entering a number in the box for excluded paragraphs.
    FindAndReplaceComponent.prototype.onParagraphNumeralEntered = function (message) {
        this.excludedParagraph = message;
    };
    FindAndReplaceComponent.prototype.replace = function () {
        this.wordDocument.replaceFoundStringsWithExceptions(this.searchString, this.replaceString, this.excludedParagraph);
    };
    FindAndReplaceComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/find-and-replace/find-and-replace.component.html',
            styleUrls: ['app/find-and-replace/find-and-replace.component.css'],
        }), 
        __metadata('design:paramtypes', [word_document_service_1.WordDocumentService, settings_storage_service_1.SettingsStorageService, router_1.Router])
    ], FindAndReplaceComponent);
    return FindAndReplaceComponent;
}());
exports.FindAndReplaceComponent = FindAndReplaceComponent;
//# sourceMappingURL=find-and-replace.component.js.map
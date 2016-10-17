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
  This file defines a service for manipulating the Word document.
*/
/// <reference path="../../../typings/index.d.ts" />
var core_1 = require('@angular/core');
var WordDocumentService = (function () {
    function WordDocumentService() {
    }
    /// <summary>
    /// Performs a search and replace, but makes no changes to text in the excluded paragraphs.
    /// </summary>
    WordDocumentService.prototype.replaceFoundStringsWithExceptions = function (searchString, replaceString, excludedParagraphs) {
        // Run a batch operation against the Word object model.
        Word.run(function (context) {
            // Find and load all ranges that match the search string, and then all paragraphs in the document.
            var foundItems = context.document.body.search(searchString, { matchCase: false, matchWholeWord: true }).load();
            var paras = context.document.body.paragraphs.load();
            // Synchronize the document state by executing the queued commands, and return a promise to indicate task completion.
            return context.sync()
                .then(function () {
                // Create an array of paragraphs that have been excluded.
                var excludedRanges = [];
                excludedRanges.push(paras.items[excludedParagraphs].getRange('Whole'));
                var replacementCandidates = [];
                // For each instance of the search string, record whether or not it is in an
                // excluded paragraph.
                for (var i = 0; i < foundItems.items.length; i++) {
                    for (var j = 0; j < excludedRanges.length; j++) {
                        replacementCandidates.push({
                            range: foundItems.items[i],
                            locationRelation: foundItems.items[i].compareLocationWith(excludedRanges[j])
                        });
                    }
                }
                // Synchronize the document state by executing the queued commands, and return a promise to indicate task completion.
                return context.sync()
                    .then(function () {
                    // Replace instances of the search string with the replace string only if they are
                    // not inside of (or identical to) an excluded range.
                    replacementCandidates.forEach(function (item) {
                        switch (item.locationRelation.value) {
                            case "Inside":
                            case "Equal":
                                break;
                            default:
                                item.range.insertText(replaceString, 'Replace');
                        }
                    });
                });
            });
        })
            .catch(this.errorHandler);
    };
    /// <summary>
    /// Inserts sample content for testing the find-and-replace functionality..
    /// </summary>
    WordDocumentService.prototype.replaceDocumentContent = function (paragraphs) {
        // Run a batch operation against the Word object model.
        Word.run(function (context) {
            // Create a proxy object for the document body.
            var body = context.document.body;
            // Queue a commmand to clear the contents of the body.
            body.clear();
            // Queue commands to insert text into the end of the Word document body.
            // Use insertText for the first to prevent a line break from being inserted 
            // at the top of the document.
            body.insertText(paragraphs[0], "End");
            // Use insertParagrpah for all the others.
            for (var i = 1; i < paragraphs.length; i++) {
                body.insertParagraph(paragraphs[i], 'End');
            }
            // Synchronize the document state by executing the queued commands, and return a promise to indicate task completion.
            return context.sync();
        })
            .catch(this.errorHandler);
    };
    WordDocumentService.prototype.errorHandler = function (error) {
        console.log("Error: " + error);
        if (error instanceof OfficeExtension.Error) {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }
    };
    WordDocumentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WordDocumentService);
    return WordDocumentService;
}());
exports.WordDocumentService = WordDocumentService;
//# sourceMappingURL=word.document.service.js.map
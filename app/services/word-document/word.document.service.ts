// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file defines a service for manipulating the Word document. 
*/

/// <reference path="../../../typings/index.d.ts" />

import { Injectable } from '@angular/core';
import { IReplacementCandidate } from './IReplacementCandidate';


@Injectable()
export class WordDocumentService {

    /// <summary>
    /// Performs a search and replace, but makes no changes to text in the excluded paragraphs.
    /// </summary>
    replaceFoundStringsWithExceptions(searchString: string, replaceString: string, excludedParagraph: number) {

        // Run a batch operation against the Word object model.
        Word.run(function (context) {

            // Find and load all ranges that match the search string, and then all paragraphs in the document.
            // Only the 'items' property of each is needed, no properties on the items are needed, so add any string 
            // after the 'items/' part of the load parameter.
            let foundItems: Word.SearchResultCollection = context.document.body.search(searchString, { matchCase: false, matchWholeWord: true }).load('items/NoPropertiesNeeded');
            let paras : Word.ParagraphCollection = context.document.body.paragraphs.load('items/NoPropertiesNeeded');

            // Synchronize the document state by executing the queued commands, and return a promise to indicate task completion.
            return context.sync()

            .then(function () {          

                // Create an array of paragraphs that have been excluded.
                let excludedRanges: Array<Word.Range> = [];
                excludedRanges.push(paras.items[excludedParagraph].getRange('Whole'));

                let replacementCandidates : Array<IReplacementCandidate> = [];

                // For each instance of the search string, record whether or not it is in an
                // excluded paragraph.
                for (let i = 0; i < foundItems.items.length; i++) {
                    for (let j = 0; j < excludedRanges.length; j++) {                 
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
    }
    
    
    /// <summary>
    /// Inserts sample content for testing the find-and-replace functionality..
    /// </summary>
    replaceDocumentContent(paragraphs: Array<string>) {
        
        // Run a batch operation against the Word object model.
        Word.run(function (context) {

            // Create a proxy object for the document body.
            let body = context.document.body;

            // Queue a commmand to clear the contents of the body.
            body.clear();

            // Queue commands to insert text into the end of the Word document body.
            // Use insertText for the first to prevent a line break from being inserted 
            // at the top of the document.
            body.insertText(paragraphs[0], "End");

            // Use insertParagrpah for all the others.
            for (let i=1; i < paragraphs.length; i++) {
                 body.insertParagraph(paragraphs[i], 'End');
            }
           
            // Synchronize the document state by executing the queued commands, and return a promise to indicate task completion.
            return context.sync();
        })
        .catch(this.errorHandler);
    }

    errorHandler(error: any){
        console.log("Error: " + error);
        if (error instanceof OfficeExtension.Error) {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }
    }
}
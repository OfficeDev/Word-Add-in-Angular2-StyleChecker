// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.

/*
  This file defines a component that enables a search-and-replace functionality for
  the Word document. 
*/

import { Component, }  from '@angular/core';
import { Router } from '@angular/router';

import { FabricTextFieldWrapperComponent } from '../shared/office-fabric-component-wrappers/fabric.textfield.wrapper.component';
import { ButtonComponent } from '../shared/button/button.component';
import { NavigationHeaderComponent} from '../shared/navigation-header/navigation.header.component';
import { BrandFooterComponent} from '../shared/brand-footer/brand.footer.component';

// The WordDocumentService provides methods for manipulating the document.
import { WordDocumentService } from '../services/word-document/word.document.service';

// The SettingsStorageService provides CRUD operations on application settings..
import { SettingsStorageService } from '../services/settings-storage/settings.storage.service';


@Component({
    templateUrl: 'app/find-and-replace/find-and-replace.component.html',
    styleUrls: ['app/find-and-replace/find-and-replace.component.css'],
})
export class FindAndReplaceComponent {

    private searchString: string;
    private replaceString: string;
    private excludedParagraph: number;
    private subscription: any;

    constructor(private wordDocument: WordDocumentService,
                private settingsStorage: SettingsStorageService,
                private router: Router) {}

    // Handle the event of a user entering text in the search box.
    onSearchTextEntered(message: string): void {
        this.searchString = message;
    }

    // Handle the event of a user entering text in the replace box.
    onReplaceTextEntered(message: string): void {
        this.replaceString = message;
    }

    // Handle the event of a user entering a number in the box for excluded paragraphs.
    onParagraphNumeralEntered(message: number): void {
        this.excludedParagraph = message;
    }

    replace(): void {
        this.wordDocument.replaceFoundStringsWithExceptions(this.searchString, this.replaceString, this.excludedParagraph);
    }
}

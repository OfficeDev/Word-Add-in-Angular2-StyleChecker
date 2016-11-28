// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  The file defines an Angular 2 component to wrap the Fabric ContextualMenu component.
*/

///<reference path="../../../typings/index.d.ts"/>

import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

// The WordDocumentService provides methods for manipulating the document.
import { WordDocumentService } from '../../services/word-document/word.document.service';

@Component({
    selector: 'of-contextual-menu',
    templateUrl: 'app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.html',
    styleUrls:['app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.css']
})
export class FabricContextualMenuWrapperComponent {
    
    constructor(private wordDocument: WordDocumentService,
                private router: Router,
                private element: ElementRef){ }

    insertSampleContent() {
        this.wordDocument.replaceDocumentContent([
            "Office Add-ins",
            "An OAI executes in an Office application and can interact with data in a document or mail item. As one observer said:",
            "\t\"The new OAI model is the cat's meow.\"",
            "An OAI is a web app that you can host anywhere. It runs in an Office application. A manifest.xml file specifies where the web app is located and how it should appear.",
            "You can find an OAI sample or two (or many) in the OfficeDev organization on GitHub."
        ]);

        this.closeMenu();
    }

    closeMenu() {
        let menuElement: HTMLElement = this.element.nativeElement // = this <of-contextual-menu>
                                                   .children[0];  // = <ul class="ms-ContextualMenu" ... >
        menuElement.classList.remove("is-open");
    }
}

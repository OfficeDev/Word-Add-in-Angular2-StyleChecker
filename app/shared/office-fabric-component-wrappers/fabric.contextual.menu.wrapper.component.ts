// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  The file defines an Angular 2 component to wrap the Fabric ContextualMenu component.
*/

///<reference path="../../../typings/index.d.ts"/>

import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

// The WordDocumentService provides methods for manipulating the document.
import { WordDocumentService } from '../../services/word-document/word.document.service';

@Component({
    selector: 'of-contextual-menu',
    templateUrl: 'app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls:['app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.css']
})
export class FabricContextualMenuWrapperComponent {//implements AfterViewInit {
    
    constructor(private wordDocument: WordDocumentService,
                private router: Router){ }

    insertSampleContent() {
        this.wordDocument.replaceDocumentContent([
            "Office Add-ins",
            "An OAI runs in an Office application and can interact with data in a document or mail item. As one observer said:",
            "\t\"The new OAI model is the cat's meow.\"",
            "An OAI is a web app that you can host anywhere. It runs in an Office application. A manifest.xml file specifies where the web app is located and how it should appear.",
            "You can find an OAI sample or two (or many) in the OfficeDev organization on GitHub."
        ]);
    }
}

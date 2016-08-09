// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  The file defines an Angular 2 component to wrap the Fabric ContextualMenu component.
*/

///<reference path="../../../typings/index.d.ts"/>

import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

// The WordDocumentService provides methods for manipulating the document.
import { WordDocumentService } from '../../services/word-document/word.document.service';

@Component({
    selector: 'of-contextual-menu',
    templateUrl: 'app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls:['app/shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component.css']
})
export class FabricContextualMenuWrapperComponent implements AfterViewInit {

  //  @ViewChild('myDropdown') menu: ElementRef;
    
    constructor(private wordDocument: WordDocumentService,
                private router: Router){ }

    insertSampleContent() {
        this.wordDocument.replaceDocumentContent([
            "Travel in the Czech Republic",
            "If you haven't considered the Czech Republic for your next vacation, it is time that you did. As Elliot McFadden puts it:",
            "\t\"The Czech Republic combines the best of Eastern and Western Europe.\"",
            "Europe's destructive wars of the 20th Century largely bypassed the lands that now make up the Czech Republic, so when you visit a castle in the Czech Republic, it is not the ruin of a castle but an actual castle, probably still inhabited or in use by the government.",
            "The most famous Czech was the renowned writer Franz Kafka. Don't miss his pink bricked high school in the center of the Czech Republic's capital, Prague."
        ]);
    }

     // After the contexual menu has fully rendered, create a Fabric ContextualMenu object for it.
     // (Future enhancement: Use Angular 2 ElementRef, instead of jQuery, to reference the elment.)
     ngAfterViewInit() {
        // this.menu.nativeElement. .ContextualMenu();

        if ($.fn.ContextualMenu) {
                $('.ms-ContextualMenu').ContextualMenu();
            }
    }
}

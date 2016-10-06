// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file defines a component that provides a button that opens a contextual menu.
*/

import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'sc-contextual-menu-button',
    templateUrl: 'app/shared/contextual-menu-button/contextual.menu.button.component.html',
    styleUrls: ['app/shared/contextual-menu-button/contextual.menu.button.component.css'],
})
export class ContextualMenuButtonComponent { 

    constructor(private element: ElementRef ){}
    
    toggleDropDown() {
        let menuElement: HTMLElement = this.element.nativeElement // = this <sc-contextual-menu-button>
                                                   .nextSibling   // = an empty text node
                                                   .nextSibling   // = <of-contextual-menu>
                                                   .children[0];  // = <ul class="ms-ContextualMenu" ... >
        menuElement.classList.toggle("is-open");
    }
}

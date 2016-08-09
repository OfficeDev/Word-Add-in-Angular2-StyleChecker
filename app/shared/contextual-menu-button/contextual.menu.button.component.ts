// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file defines a component that provides a button that opens a contextual menu.
*/

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sc-contextual-menu-button',
    templateUrl: 'app/shared/contextual-menu-button/contextual.menu.button.component.html',
    styleUrls: ['app/shared/contextual-menu-button/contextual.menu.button.component.css'],
})
export class ContextualMenuButtonComponent implements OnInit {

    // Future enhancement: Use more Angular-centric methods to reference the menu,
    // in place of the getElementById.
    ngOnInit() {
        $('#myButton').click(function () {
            document.getElementById("myDropdown").classList.toggle("is-open");
        });
    }
}

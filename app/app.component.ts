// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file defines the root component of the application. 
*/

/// <reference path="../typings/index.d.ts" />

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

// The WordDocumentService provides methods for manipulating the document.
import { WordDocumentService } from './services/word-document/word.document.service';

// The SettingsStorageService provides CRUD operations on application settings.
import { SettingsStorageService } from './services/settings-storage/settings.storage.service';

@Component({
    selector: 'sc-app',
    template: `
    <div>        
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [WordDocumentService, SettingsStorageService, HTTP_PROVIDERS]
})

export class AppComponent {}

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file defines the root component of the application. 
*/

/// <reference path="../typings/index.d.ts" />

import {Component} from '@angular/core';

@Component({
    selector: 'sc-app',
    template: `
    <div>        
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `
})
export class AppComponent { }
// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file defines a service that provides CRUD operations on application settings. 
*/

/// <reference path="../../../typings/index.d.ts" />

import { Injectable } from '@angular/core';


@Injectable()
export class SettingsStorageService { 
    
    constructor() {}

    store(specificKey: string, value: string) {
        window.localStorage.setItem(specificKey, value);
    }

    fetch(specificKey: string) : string {
        return window.localStorage.getItem(specificKey);
    }

    remove(specificKey: string) {
        window.localStorage.removeItem(specificKey);
    }
}

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file defines a service that provides CRUD operations on application settings. 
*/

/// <reference path="../../../typings/index.d.ts" />

import { Injectable } from '@angular/core';
// import { IReplacementCandidate } from './IReplacementCandidate';


@Injectable()
export class SettingsStorageService { 

    private keyStem: string; 
    
    constructor() {

        // Use the application's domain/port on all storage keys to avoid name clashes.
        this.keyStem = location.hostname + (location.port ? ':' + location.port : '');
    }

    store(specificKey: string, value: string) {
        window.localStorage.setItem(this.keyStem + specificKey, value);
    }

    fetch(specificKey: string) : string {
        return window.localStorage.getItem(this.keyStem + specificKey);
    }

    remove(specificKey: string) {
        window.localStorage.removeItem(this.keyStem + specificKey);
    }

}

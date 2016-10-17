// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file defines a settings view. It is based on
  the settings sample, created by the Modern Assistance Experience Developer 
  Docs team. Along with other samples, it is in the Office-Add-in-UX-Design-Patterns-Code 
  repo:  https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code
*/

import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationHeaderComponent} from '../shared/navigation-header/navigation.header.component';
import { ButtonComponent } from '../shared/button/button.component';
import { BrandFooterComponent} from '../shared/brand-footer/brand.footer.component';

// The SettingsStorageService provides CRUD operations on application settings.
import { SettingsStorageService } from '../services/settings-storage/settings.storage.service';

@Component({
    templateUrl: 'app/settings/settings.component.html',
    styleUrls: ['app/settings/settings.component.css']
})
export class SettingsComponent {
   
   // Get references to the radio buttons so we can toggle which is selected.
   @ViewChild('always') alwaysRadioButton: ElementRef;
   @ViewChild('onlyFirstTime') onlyFirstTimeRadioButton: ElementRef;

  constructor(private settingsStorage: SettingsStorageService) {}

  ngAfterViewInit() {
    let currentInstructionSetting: string = this.settingsStorage.fetch("StyleCheckerAddinShowInstructions");
    
    // Ensure that when the settings view loads, the radio button selection matches
    // the user's current setting.
    if (currentInstructionSetting === "OnlyFirstTime") { 
      this.alwaysRadioButton.nativeElement.removeAttribute("checked");
      this.onlyFirstTimeRadioButton.nativeElement.setAttribute("checked", "checked");
    }
  }

  onRadioButtonSelected(specificSetting: string, value: string){
    this.settingsStorage.store(specificSetting, value);
  }
}


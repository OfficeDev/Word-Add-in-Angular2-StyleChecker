// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/* 
  This file configures the routes of the application.
*/

import { provideRouter, RouterConfig } from '@angular/router';
import { FindAndReplaceComponent } from './find-and-replace/find-and-replace.component';
import { InstructionStepsComponent } from './instructions/instruction-steps.component';
import { SettingsComponent } from './settings/settings.component';

// Gets the local storage setting that specifies when to skip instructions
function fetchInstructionSetting() : string {
    return window.localStorage.getItem("StyleCheckerAddinShowInstructions");
}

function setRoutesArray(): any {
  let routesArray: any = [
      { path: 'instruction-steps', component: InstructionStepsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'find-and-replace', component: FindAndReplaceComponent }
  ];

  let defaultRoute: any = { path: '', redirectTo: 'instruction-steps', pathMatch: 'full'};

  // If a user has set the application to skip the instruction view,
  // then set the default route to the search and replace view.
  if(fetchInstructionSetting() === "OnlyFirstTime") {
       defaultRoute = { path: '', redirectTo: 'find-and-replace', pathMatch: 'full'}
  }
  routesArray.push(defaultRoute);

  return routesArray;
}

export const routes: RouterConfig = setRoutesArray();

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];


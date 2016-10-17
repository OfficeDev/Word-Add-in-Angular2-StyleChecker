// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file defines a navigation header for a task pane page. It is based on
  the navigation sample, created by the Modern Assistance Experience Developer 
  Docs team. Along with other samples, it is in the Office-Add-in-UX-Design-Patterns-Code 
  repo:  https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code
*/

import { Component } from '@angular/core';

// Import the child components that will be in the header.
import { ContextualMenuButtonComponent } from '../contextual-menu-button/contextual.menu.button.component';
import { FabricContextualMenuWrapperComponent } from '../office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component';

@Component({
    selector: 'sc-navigation-header',
    templateUrl: 'app/shared/navigation-header/navigation.header.component.html',
    styleUrls: ['app/shared/navigation-header/navigation.header.component.css'],
})
export class NavigationHeaderComponent {}

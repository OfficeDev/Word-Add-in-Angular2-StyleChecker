// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file brings together all of the required modules and components and identifies 
  the component to be bootstrapped.
*/

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppRoutingModule }     from './app-routing.module';

// Import all the custom components.
import { AppComponent }         from './app.component';
import { FindAndReplaceComponent } from './find-and-replace/find-and-replace.component';
import { InstructionStepsComponent } from './instructions/instruction-steps.component';
import { SettingsComponent } from './settings/settings.component';
import { ButtonComponent } from './shared/button/button.component';
import { NavigationHeaderComponent} from './shared/navigation-header/navigation.header.component';
import { BrandFooterComponent} from './shared/brand-footer/brand.footer.component';
import { ContextualMenuButtonComponent } from './shared/contextual-menu-button/contextual.menu.button.component';
import { FabricContextualMenuWrapperComponent } from './shared/office-fabric-component-wrappers/fabric.contextual.menu.wrapper.component';
import { FabricTextFieldWrapperComponent } from './shared/office-fabric-component-wrappers/fabric.textfield.wrapper.component';

// The WordDocumentService provides methods for manipulating the document.
import { WordDocumentService } from './services/word-document/word.document.service';

// The SettingsStorageService provides CRUD operations on application settings.
import { SettingsStorageService } from './services/settings-storage/settings.storage.service';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FindAndReplaceComponent,
    InstructionStepsComponent,
    SettingsComponent,
    ButtonComponent,
    NavigationHeaderComponent,
    BrandFooterComponent,
    ContextualMenuButtonComponent,
    FabricContextualMenuWrapperComponent,
    FabricTextFieldWrapperComponent
  ],
  providers: [ 
    WordDocumentService, 
    SettingsStorageService
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  The file defines an Angular 2 component to wrap the Fabric TextField component.
*/

import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

// Import the default Fabric implementation of TextField
import { TextField } from './TextField';

@Component({
    selector: 'of-textfield',
    templateUrl: 'app/shared/office-fabric-component-wrappers/fabric.textfield.wrapper.component.html',
})
export class FabricTextFieldWrapperComponent implements AfterViewInit {
    
    private field: TextField;

    // The parent component will supply the values for these properties.
    @Input() innerlabel: string;
    @Input() id: string;
    @Input() value: string = "";

    // Create an event to run when the user enters text in the text field.
    @Output() textEntered:  EventEmitter<string> = new EventEmitter<string>();  

    constructor(private element: ElementRef ){ }

    // After the textfield has fully rendered, create a Fabric TextField object for it.
    ngAfterViewInit() {
        let componentElement: HTMLElement = this.element.nativeElement.children[0];
        this.field = new TextField(componentElement);
    }

    // When the user changes the text field's contents, pull the new value up from the 
    // Fabric component to the Angular 2 component, and tell the parent view about
    // the event.
    onValueChanged(): void {
        this.value = this.field._textField.value;
        this.textEntered.emit(this.value);
    }
}
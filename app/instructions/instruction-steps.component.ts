// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.

/*
  This file defines an instructions component for a task pane page. It is based on
  the instruction-step sample, created by the Modern Assistance Experience Developer 
  Docs team. Along with other samples, it is in the Office-Add-in-UX-Design-Patterns-Code 
  repo:  https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code
*/

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from '../shared/button/button.component';
import { IInstructionStep } from './IInstructionStep';

@Component({
    templateUrl: 'app/instructions/instruction-steps.component.html',
    styleUrls: ['app/instructions/instruction-steps.component.css']
})
export class InstructionStepsComponent {

    private title: string = "WELCOME";
    private addin_description: string = "Style Checker enables you to enforce style rules while exempting paragraphs that you specify from the rules.";
    private steps_intro: string = "Just take these steps:";
    private steps: Array<IInstructionStep> =
    [{ step_number: 1, content: "Enter a string in the Find box." },
        { step_number: 2, content: "Enter a replacement string in the Replace With box." },
        { step_number: 3, content: "Enter the zero-based numbers of the parapgraphs that should be exempt in the Skip Paragraphs box." },
        { step_number: 4, content: "Press Replace." }];

    constructor(private router: Router) { }

}


// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
  This file defines an instructions component for a task pane page. It is based on
  the instruction-step sample, created by the Modern Assistance Experience Developer
  Docs team. Along with other samples, it is in the Office-Add-in-UX-Design-Patterns-Code
  repo:  https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code
*/
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var InstructionStepsComponent = (function () {
    function InstructionStepsComponent(router) {
        this.router = router;
        this.title = "WELCOME";
        this.addin_description = "Style Checker enables you to enforce style rules while exempting paragraphs that you specify from the rules.";
        this.steps_intro = "Just take these steps:";
        this.steps = [{ step_number: 1, content: "Enter a string in the Find box." },
            { step_number: 2, content: "Enter a replacement string in the Replace With box." },
            { step_number: 3, content: "Enter the zero-based numbers of the parapgraphs that should be exempt in the Skip Paragraphs box." },
            { step_number: 4, content: "Press Replace." }];
    }
    InstructionStepsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/instructions/instruction-steps.component.html',
            styleUrls: ['app/instructions/instruction-steps.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], InstructionStepsComponent);
    return InstructionStepsComponent;
}());
exports.InstructionStepsComponent = InstructionStepsComponent;
//# sourceMappingURL=instruction-steps.component.js.map
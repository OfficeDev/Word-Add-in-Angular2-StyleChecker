// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.

/*
  This file creates a type that is used to hold the contents of a step_number
  in a step-by-step procedure.
*/

export interface IInstructionStep {
    step_number: number;
    content: string;
}
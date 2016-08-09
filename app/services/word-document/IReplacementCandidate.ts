// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.

/*
  This file creates a type that is used to record the location of a range
  relative to another range.
*/

export interface IReplacementCandidate {
    range: Word.Range;
    locationRelation: OfficeExtension.ClientResult<string>;
}
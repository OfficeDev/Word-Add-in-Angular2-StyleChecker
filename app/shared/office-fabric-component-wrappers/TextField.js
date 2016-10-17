// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
"use strict";
// Modification to default file: Remove the wrapping namespace when you use the 
// file in an Angular 2 application. It is not needed and namespaces don't play 
// well with modules in Angular 2.
//namespace fabric {
var TextFieldConsts;
(function (TextFieldConsts) {
    (function (Type) {
        Type[Type["Placeholder"] = 0] = "Placeholder";
        Type[Type["Underlined"] = 1] = "Underlined";
    })(TextFieldConsts.Type || (TextFieldConsts.Type = {}));
    var Type = TextFieldConsts.Type;
})(TextFieldConsts || (TextFieldConsts = {}));
/**
 * Text Field Plugin
 *
 * Adds basic demonstration functionality to .ms-TextField components.
 */
var TextField = (function () {
    /**
     *
     * @param {HTMLDivElement} container - the target container for an instance of TextField
     * @constructor
     */
    function TextField(container) {
        this._container = container;
        this._type = [];
        this._textField = this._container.querySelector(".ms-TextField-field");
        this._textFieldLabel = this._container.querySelector(".ms-Label");
        this._setTextFieldType();
        this._addListeners();
    }
    /** Populate _type with various kinds of text fields */
    TextField.prototype._setTextFieldType = function () {
        if (this._container.classList.contains("ms-TextField--placeholder")) {
            this._type.push(TextFieldConsts.Type.Placeholder);
        }
        if (this._container.classList.contains("ms-TextField--underlined")) {
            this._type.push(TextFieldConsts.Type.Underlined);
        }
    };
    /** Add event listeners according to the type(s) of text field */
    TextField.prototype._addListeners = function () {
        var _this = this;
        /** Placeholder - hide/unhide the placeholder  */
        if (this._type.indexOf(TextFieldConsts.Type.Placeholder) >= 0) {
            this._textField.addEventListener("focus", function (event) {
                _this._textFieldLabel.style.display = "none";
            });
            // Modify default Fabric code to ensure that the text box gets focus when the 
            // the placeholder text itself is clicked.
            this._textFieldLabel.addEventListener("click", function (event) {
                _this._textField.focus();
            });
            this._textField.addEventListener("blur", function (event) {
                // Show only if no value in the text field
                if (_this._textField.value.length === 0) {
                    _this._textFieldLabel.style.display = "block";
                }
            });
        }
        /** Underlined - adding/removing a focus class  */
        if (this._type.indexOf(TextFieldConsts.Type.Underlined) >= 0) {
            this._textField.addEventListener("focus", function (event) {
                _this._container.classList.add("is-active");
            });
            this._textField.addEventListener("blur", function (event) {
                _this._container.classList.remove("is-active");
            });
        }
    };
    return TextField;
}());
exports.TextField = TextField;
//}
//# sourceMappingURL=TextField.js.map
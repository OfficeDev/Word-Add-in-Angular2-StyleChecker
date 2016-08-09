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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var fabric_textfield_wrapper_component_1 = require('../shared/office-fabric/fabric.textfield.wrapper.component');
var button_component_1 = require('../shared/button.component');
var navigation_header_component_1 = require('../shared/navigation.header.component');
var brand_footer_component_1 = require('../shared/brand.footer.component');
var StyleFixComponent = (function () {
    function StyleFixComponent() {
    }
    StyleFixComponent.prototype.replace = function () {
        console.log("replace clicked");
        // Word.run(function (context) {
        //     var foundItems = context.document.body.search(searchString.value, { matchCase: false, matchWholeWord: true }).load();
        //     var paras = context.document.body.paragraphs.load();
        //     return context.sync()
        //         .then(function () {          
        //             var excludedRanges = [];
        //             excludedRanges.push(paras.items[excludedParagraphs.value].getRange('Whole'));
        //             var replacementCandidates = [];
        //             for (var i = 0; i < foundItems.items.length; i++) {
        //                 for (var j = 0; j < excludedRanges.length; j++) {                        
        //                     replacementCandidates.push({
        //                         range: foundItems.items[i],
        //                         locationRelation: foundItems.items[i].compareLocationWith(excludedRanges[j])
        //                     });
        //                 }
        //             }
        //             return context.sync()
        //                 .then(function () {
        //                     replacementCandidates.forEach(function (item) {
        //                         switch (item.locationRelation.m_value) {
        //                             case "Inside":
        //                             case "Equal":
        //                                 break;
        //                             default:
        //                                 item.range.insertText(replaceString.value, 'Replace');
        //                         }
        //                     });
        //                 });
        //         });
        // })
        // .catch(errorHandler);
    };
    StyleFixComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/find-and-replace/find-and-replace.component.html',
            styleUrls: ['app/find-and-replace/find-and-replace.component.css'],
            directives: [navigation_header_component_1.NavigationHeaderComponent, fabric_textfield_wrapper_component_1.FabricTextFieldWrapperComponent,
                button_component_1.ButtonComponent, brand_footer_component_1.BrandFooterComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], StyleFixComponent);
    return StyleFixComponent;
}());
exports.StyleFixComponent = StyleFixComponent;
//# sourceMappingURL=style-fix.component.js.map
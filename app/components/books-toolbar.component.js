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
var BooksToolbarComponent = (function () {
    function BooksToolbarComponent() {
        this.searchTerm = undefined;
        this.search = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BooksToolbarComponent.prototype, "search", void 0);
    BooksToolbarComponent = __decorate([
        core_1.Component({
            selector: 'books-toolbar',
            template: "\n        <input [(ngModel)]=\"searchTerm\" type=\"text\" placeholder=\"search book titles\" />\n        <button (click)=\"search.emit(searchTerm)\">Add Books</button>\n        <p *ngIf=\"searchTerm\">Using search term: {{searchTerm}}</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], BooksToolbarComponent);
    return BooksToolbarComponent;
}());
exports.BooksToolbarComponent = BooksToolbarComponent;
//# sourceMappingURL=books-toolbar.component.js.map
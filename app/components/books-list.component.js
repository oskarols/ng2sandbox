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
var store_1 = require('@ngrx/store');
var BooksListComponent = (function () {
    function BooksListComponent(store) {
        var _this = this;
        this.store = store;
        store.select('books').subscribe(function (data) {
            debugger;
            console.log('args', data);
            _this.books = data;
        });
    }
    BooksListComponent = __decorate([
        core_1.Component({
            selector: 'books-list',
            template: "\n        <h5>Book list</h5>\n        <ul>\n            <li *ngFor=\"let book of books\">\n                {{book.title}}\n            </li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [store_1.Store])
    ], BooksListComponent);
    return BooksListComponent;
}());
exports.BooksListComponent = BooksListComponent;
//# sourceMappingURL=books-list.component.js.map
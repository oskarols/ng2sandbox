"use strict";
exports.ADD_FAVORITE = 'ADD_FAVORITE';
exports.REMOVE_FAVORITE = 'REMOVE_FAVORITE';
exports.ADD_BOOKS = 'ADD_BOOKS';
exports.booksReducer = function (state, _a) {
    if (state === void 0) { state = []; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case exports.ADD_BOOKS:
            debugger;
            state.concat(payload);
        default:
            return state;
    }
};
//# sourceMappingURL=books.js.map
export const ADD_BOOKS = 'ADD_BOOKS';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

import {Book} from './../models/book';
import {BookSearchResultItem} from './../models/book.search';

export const booksReducer = (state: any = [], {type, payload}) => {
    switch (type) {
        case ADD_BOOKS:
            payload.forEach((bookData:any) => bookData.isFavorited = false );
            return [...state, ...payload];
        case REMOVE_BOOK:
            return state.filter((book) => book.id !== payload.id)
        case ADD_FAVORITE:
            return state.map((book) => {
                if (book.id !== payload.id) return book;
                return Object.assign({}, payload, {
                    isFavorited: true
                });
            });
        case REMOVE_FAVORITE:
            return state.map((book) => {
                if (book.id !== payload.id) return book;
                return Object.assign({}, payload, {
                    isFavorited: false
                });
            });
        default:
            return state;
    }
}

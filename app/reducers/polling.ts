export const POLL_BOOKS = 'POLL_BOOKS';
export const POLL_BOOKS_START = 'POLL_BOOKS_START';
export const POLL_BOOKS_STOP = 'POLL_BOOKS_STOP';

import {Book} from './../models/book';
import {BookSearchResultItem} from './../models/book.search';

export const booksReducer = (state: any = [], {type, payload}) => {
    switch (type) {
        case POLL_BOOKS:
            payload.forEach((bookData:any) => bookData.isFavorited = false );
            return [...state, ...payload];
        case POLL_BOOKS_START:
            return state.filter((book) => book.id !== payload.id)
        case POLL_BOOKS_STOP:
            return state.map((book) => {
                if (book.id !== payload.id) return book;
                return Object.assign({}, payload, {
                    isFavorited: true
                });
            });
        default:
            return state;
    }
}

import {BookSearchResultItem} from './book.search';

export interface Book extends BookSearchResultItem {
    isFavorited: boolean;
}

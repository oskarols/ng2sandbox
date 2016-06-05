export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const ADD_BOOKS = 'ADD_BOOKS';

export const booksReducer = (state: any = [], {type, payload}) => {
    switch (type) {
        case ADD_BOOKS:
            return [...state, ...payload];
        default:
            return state;
    }
}

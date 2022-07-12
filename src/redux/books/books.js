// books.js

const initialState = [];

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [
        ...state,
        action.payload,
      ];
    }

    case REMOVE_BOOK: {
      const newArrayBook = state.filter((book) => book.id !== action.payload);
      return newArrayBook;
    }
    default: return state;
  }
};

// Action Creators

export const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

// books.js

import { fetchData, addData } from '../../services/booksService';

const initialState = [];

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';

// Reducer
export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK: {
      return action.payload;
    }
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

/* export const addBook = (newBook) => ({

  type: ADD_BOOK,
  payload: newBook,
}); */

export const addBook = (newBook) => async (dispatch) => {
  await addData(newBook);
  dispatch({
    type: ADD_BOOK,
    payload: newBook,
  });
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const fetchBooks = () => async (dispatch) => {
  const books = await fetchData();
  console.log('booookss', books);
  dispatch({
    type: FETCH_BOOK,
    payload: books,
  });
};

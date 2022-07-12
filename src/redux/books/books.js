// books.js

const initialState = [
  {
    id: 1,
    title: 'The power of self discipline',
    author: 'Peter Hollins',
    genre: 'Self-Help',
  },
  {
    id: 2,
    title: 'Get out your own way',
    author: 'Mark Goulston',
    genre: 'Self-Help',
  },
  {
    id: 3,
    title: 'Life of Pi',
    author: 'Yann Martel',
    genre: 'Adventure',
  },
  {
    id: 4,
    title: 'Bob the cat',
    author: 'Yann Martel',
    genre: 'Adventure',
  },
];

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

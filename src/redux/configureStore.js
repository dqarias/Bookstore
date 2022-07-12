import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { booksReducer } from './books/books';
import { categoriesReducer } from './categories/categories';

const reducers = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore(reducers);

export default store;

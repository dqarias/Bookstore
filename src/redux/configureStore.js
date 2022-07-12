import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { booksReducer } from './books/books';
import { categoriesReducer } from './categories/categories';


const store = configureStore({
    reducer : {
        books: booksReducer,
        categories: categoriesReducer,
    }
});

export default store;

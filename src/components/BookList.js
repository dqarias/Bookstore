/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';

const BookList = ({ books, handleDeleteBookProps }) => (
  <div>
    {books.map((book) => (
      <Book
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        genre={book.genre}
        handleDeleteBookProps={handleDeleteBookProps}
      />
    ))}
  </div>
);

export default BookList;

/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
        genre={book.genre}
      />
    ))}
  </div>
);

export default BookList;

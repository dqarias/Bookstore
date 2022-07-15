/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
      <Book
        key={book.item_id}
        id={book.item_id}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    ))}
  </div>
);

export default BookList;

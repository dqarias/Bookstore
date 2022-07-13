import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import InputBook from './InputBook';

const Books = () => {
  const bookState = useSelector((state) => state.books);

  return (
    <div>
      <BookList books={bookState} />
      <br />
      <br />
      <InputBook />
    </div>
  );
};

export default Books;

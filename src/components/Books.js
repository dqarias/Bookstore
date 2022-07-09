import React from 'react';
import data from '../data';
import BookList from './BookList';
import InputBook from './InputBook';

const Books = () => {
  console.log(data);

  return (
    <div>
      <BookList books={data} />
      <br />
      <br />
      <InputBook />
    </div>
  );
};

export default Books;

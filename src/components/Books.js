import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import BookList from './BookList';
import InputBook from './InputBook';

const Books = () => {
  const bookState = useSelector((state) => state.books);
  const dispatchDelete = useDispatch();

  const handleDeleteBook = (id) => {
    dispatchDelete(removeBook(id));
  };

  return (
    <div>
      <BookList books={bookState} handleDeleteBookProps={handleDeleteBook} />
      <br />
      {console.log(bookState)}
      <br />
      <InputBook />
    </div>
  );
};

export default Books;

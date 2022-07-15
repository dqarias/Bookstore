import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import BookList from './BookList';
import InputBook from './InputBook';

const Books = () => {
  const bookState = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

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

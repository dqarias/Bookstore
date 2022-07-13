/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, genre, id,
}) => {
  const dispatchDelete = useDispatch();

  const handleDeleteBook = (id) => {
    dispatchDelete(removeBook(id));
  };

  return (
    <div>
      <p>{genre}</p>
      <p>{title}</p>
      <p>{author}</p>
      <button onClick={() => handleDeleteBook(id)} type="button">Remove</button>
    </div>
  );
};
export default Book;

import React from 'react';
import PropTypes from 'prop-types';
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

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  genre: PropTypes.string,
  id: PropTypes.string,
};

Book.defaultProps = {
  title: undefined,
  author: undefined,
  genre: undefined,
  id: undefined,
};

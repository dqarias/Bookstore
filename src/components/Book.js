/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({
  title, author, genre, handleDeleteBookProps, id,
}) => (
  <div>
    <p>{genre}</p>
    <p>{title}</p>
    <p>{author}</p>
    <button onClick={() => handleDeleteBookProps(id)} type="button">Remove</button>
  </div>
);

export default Book;

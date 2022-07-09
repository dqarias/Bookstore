/* eslint-disable react/prop-types */
import React from 'react';

const Book = ({ title, author, genre }) => (
  <div>
    <p>{genre}</p>
    <p>{title}</p>
    <p>{author}</p>
    <button type="button">Remove</button>
  </div>
);

export default Book;

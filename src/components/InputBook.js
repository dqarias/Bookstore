import React from 'react';
import { useDispatch } from 'react-redux';

const InputBook = () => {
  const onChange = () => {

  };

  return (
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Book author" />
      <button type="button">ADD BOOK</button>
    </form>
  );
};

export default InputBook;

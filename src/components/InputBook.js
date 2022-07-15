import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const [bookArray, setBookArray] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
  });

  const dispatchBook = useDispatch();

  const handleInputChange = (e) => {
    setBookArray(
      {
        ...bookArray,
        [e.target.name]: e.target.value,
      },
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: bookArray.title,
      author: bookArray.author,
      category: bookArray.category,
    };

    dispatchBook(addBook(newBook));

    bookArray.title = '';
    bookArray.author = '';
    bookArray.category = '';
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Book title"
        value={bookArray.title}
        name="title"
        onChange={(e) => handleInputChange(e)}
      />
      <input
        type="text"
        placeholder="Book author"
        value={bookArray.author}
        name="author"
        onChange={(e) => handleInputChange(e)}
      />
      <input
        type="text"
        placeholder="Book category"
        value={bookArray.category}
        name="category"
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={handleSubmit} type="button">ADD BOOK</button>
    </form>
  );
};

export default InputBook;

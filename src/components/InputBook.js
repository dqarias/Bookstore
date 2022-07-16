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
    <div className="inputBook">
      <h3 className="inputBook__title">
        ADD NEW BOOK
      </h3>
      <form className="inputBook__form">
        <input
          type="text"
          placeholder="Book title"
          value={bookArray.title}
          name="title"
          onChange={(e) => handleInputChange(e)}
          className="inputBook__form-input"
        />
        <input
          type="text"
          placeholder="Book author"
          value={bookArray.author}
          name="author"
          onChange={(e) => handleInputChange(e)}
          className="inputBook__form-input"
        />
        {/* <input
          type="text"
          placeholder="Book category"
          value={bookArray.category}
          name="category"
          onChange={(e) => handleInputChange(e)}
        /> */}
        <select
          className="inputBook__form-select"
          value={bookArray.category}
          name="category"
          onChange={(e) => handleInputChange(e)}
        >
          <option
            className="inputBook__form-option"
            value=""
          >
            Select Category
          </option>
          <option value="Novel">Novel</option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="Self Help">Self Help</option>
        </select>

        <button className="button primary" onClick={handleSubmit} type="button">ADD BOOK</button>
      </form>
    </div>

  );
};

export default InputBook;

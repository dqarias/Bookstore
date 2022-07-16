import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  title, author, category, id,
}) => {
  const dispatchDelete = useDispatch();

  const handleDeleteBook = (id) => {
    dispatchDelete(removeBook(id));
  };

  const randomPercentage = Math.floor(Math.random() * 101);

  return (
    <div className="book">
      <div className="book__information">
        <p className="book__information-category">{category}</p>
        <p className="book__information-title">{title}</p>
        <p className="book__information-author">{author}</p>
        <div className="book_information-buttons">
          <button className="button info-primary " type="button">Comments</button>
          <span>|</span>
          <button className="button info-primary " onClick={() => handleDeleteBook(id)} type="button">Remove</button>
          <span>|</span>
          <button className="button info-primary " type="button">Edit</button>
        </div>
      </div>
      <div className="book__stats">
        <div className="book__percentage">
          <div className="book__percentage-circular" style={{ width: 100, height: 100 }}>
            <CircularProgressbar
              value={randomPercentage}
              styles={buildStyles({
                pathColor: '#0290ff',
              })}
            />
          </div>
          <div className="book__percentage-info">
            <p className="book__percentage-number">
              {randomPercentage}
              %
            </p>
            <p className="book__percentage-state">Completed</p>
          </div>
        </div>
        <div className="book__status">
          <p className="book__status-current">current chapter</p>
          <p className="book__status-chapter">chapter 17</p>
          <button className="button primary" type="button">UPDATE PROGRESS</button>
        </div>
      </div>

    </div>
  );
};
export default Book;

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
};

Book.defaultProps = {
  title: undefined,
  author: undefined,
  category: undefined,
  id: undefined,
};

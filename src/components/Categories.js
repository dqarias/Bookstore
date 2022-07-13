import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dataCategory = useSelector((state) => state.categories);
  const dispatchCategories = useDispatch();

  const handleClickCheck = () => {
    dispatchCategories(checkStatus());
  };

  return (
    <div>
      <p>
        {dataCategory}
      </p>
      <div>
        <button onClick={() => handleClickCheck()} type="button">Check Status</button>
      </div>
    </div>

  );
};

export default Categories;

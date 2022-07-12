// categories.js

const initialState = [];

// Actions

const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Reducer

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'Under construction';
    }

    default: return state;
  }
};

// Action Creators

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

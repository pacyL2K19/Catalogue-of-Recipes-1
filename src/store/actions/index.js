import axios from 'axios';

const options = {
  method: 'GET',
  url: process.env.REACT_APP_SERVER_URL,
  headers: {
    authorization: process.env.REACT_APP_AUTH,
    'x-rapidapi-key': process.env.REACT_APP_KEY,
    'x-rapidapi-host': process.env.REACT_APP_HOST,
  },
};

export const getPizza = () => (dispatch) => {
  options.params = {
    query: 'pizza', locale: 'en-US', per_page: '6', page: '1', orientation: 'landscape',
  };
  axios(options).then((response) => {
    if (response) {
      dispatch(
        {
          type: 'CREATE_PIZZA',
          payload: response.data,
        },
      );
    }
  }).catch((error) => (
    {
      type: 'PIZZA_ERROR',
      payload: error,
    }
  ));
};

export const getBurger = () => (dispatch) => {
  options.params = {
    query: 'burger', locale: 'en-US', per_page: '6', page: '1', orientation: 'landscape',
  };
  axios(options).then((response) => {
    if (response) {
      dispatch(
        {
          type: 'CREATE_PIZZA',
          payload: response.data,
        },
      );
    }
  }).catch((error) => (
    {
      type: 'PIZZA_ERROR',
      payload: error,
    }
  ));
};

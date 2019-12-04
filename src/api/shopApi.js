import axios from 'axios';

const getShops = () => {
  axios.get(process.env.REACT_APP_API_URL + '/shops').then((response) => {
    return response;
  }).catch( (error) => {
    return error;
  });
};

export const shopApi = {
  getShops,
};

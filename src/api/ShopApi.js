import axios from 'axios';
import { authHeaders } from './Headers';

const url = `${process.env.REACT_APP_API_URL}/manage/shops`;

const getShops = async () => {
    return axios.get(url, { headers: authHeaders });
};

const updateShop = async (shop, id) => {
    return axios.put(`${url}/${id}`, shop, { headers: authHeaders });
};

const deleteShop = async (id) => {
    return axios.delete(`${url}/${id}`, { headers: authHeaders });
};

const saveShop = async (shop) => {
    return axios.post(url, shop, { headers: authHeaders });
};

const shopApi = {
    getShops,
    saveShop,
    updateShop,
    deleteShop,
};

export default shopApi;

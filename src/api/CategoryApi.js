import axios from 'axios';
import { authHeaders } from './Headers';

const url = `${process.env.REACT_APP_API_URL}/manage/categories`;

const getCategories = async () => {
    return axios.get(url, { headers: authHeaders });
};

const updateCategory = async (category, id) => {
    return axios.put(`${url}/${id}`, category, { headers: authHeaders });
};

const deleteCategory = async (id) => {
    return axios.delete(`${url}/${id}`, { headers: authHeaders });
};

const saveCategory = async (category) => {
    return axios.post(url, category, { headers: authHeaders });
};

const categoryApi = {
    getCategories,
    saveCategory,
    updateCategory,
    deleteCategory,
};

export default categoryApi;

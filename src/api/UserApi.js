import axios from 'axios';
import { authHeaders } from './Headers';

const url = `${process.env.REACT_APP_API_URL}/manage/users`;

const getUsers = async () => {
    return axios.get(url, { headers: authHeaders });
};

const updateUser = async (user, id) => {
    return axios.put(`${url}/${id}`, user, { headers: authHeaders });
};

const deleteUser = async (id) => {
    return axios.delete(`${url}/${id}`, { headers: authHeaders });
};

const saveUser = async (user) => {
    return axios.post(url, user, { headers: authHeaders });
};

const userApi = {
    getUsers,
    saveUser,
    updateUser,
    deleteUser,
};

export default userApi;

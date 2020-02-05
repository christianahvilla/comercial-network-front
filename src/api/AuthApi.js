import axios from 'axios';
import { loginHeaders, authHeaders } from './Headers';

const url = `${process.env.REACT_APP_API_URL}/auth`;

const login = async (credentials) => {
    return axios.post(`${url}/login`, credentials, { headers: loginHeaders });
};

const logout = async () => {
    return axios.get(`${url}/logout`, { headers: authHeaders });
};

const authApi = {
    login,
    logout,
};

export default authApi;

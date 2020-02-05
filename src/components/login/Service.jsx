import axios from 'axios';

const base_api_url = 'http://127.0.0.1:8000/api/';

export function login(Login) {
    return axios.post(`${base_api_url}auth/login`, Login);
}

export function logout() {
    return axios.get(`${base_api_url}auth/logout`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    });
}

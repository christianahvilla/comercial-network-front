import axios from 'axios';
import { authHeaders } from './Headers';

const url = `${process.env.REACT_APP_API_URL}/manage/images`;

const deleteImage = async (id) => {
    return axios.delete(`${url}/${id}`, { headers: authHeaders });
};

const saveImage = async (image) => {
    return axios.post(url, image, { headers: authHeaders });
};

const imageApi = {
    saveImage,
    deleteImage,
};

export default imageApi;

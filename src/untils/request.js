import axios from 'axios';

export const request = axios.create({
    // baseURL: process.env.REACT_APP_URL_ZING,
    baseURL: "https://api-zing-mp3-sandy.vercel.app/api",
});
export const get = async (path, options = {}) => {
    const res = await request.get(path, options);
    return res.data;
};
export const post = async (path, body = {}, header = {}) => {
    const res = await request.post(path, body, header);
    return res.data;
};

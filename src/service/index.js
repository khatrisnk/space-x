import fetch from 'cross-fetch';
import { API_URL } from '../constants';

export const getSpaceXData = async (url = API_URL) => {
    try {
        const res = await fetch(url);
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

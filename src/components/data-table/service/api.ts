import axios from 'axios';

export const getData = async (url: string) => {
    try {
        const resp = await axios.get(url);

        return resp.data;
    } catch (e) {
        return [];
        console.error(e)
    }
};

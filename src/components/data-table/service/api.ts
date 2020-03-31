import axios from 'axios';

export const getData = async (url: string) => {
    const resp = await axios.get(url)

    return resp.data;
};

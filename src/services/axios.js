import axios from "axios";
import { getToken } from "./storage/localStorageService";

const apiGet = async (url) => {
    try {
        const token = getToken({ data: false });

        console.log(token);

        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const apiGetDocument = async (url) => {
    try {
        const token = getToken({ data: false });

        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/pdf'
            },
            responseType: 'blob'
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

const apiPost = async (url, data) => {
    try {
        if (url === "http://localhost:4000/auth/login" || url === "http://localhost:4000/auth/registro") {
            const response = await axios.post(url, data);
            return response;
        }

        const token = getToken({ data: false });

        const response = await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const apiPut = async (url, data, token) => {
    try {
        const response = await axios.put(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const apiDelete = async (url, token) => {
    try {
        const response = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export { apiGet, apiPost, apiPut, apiDelete, apiGetDocument };

import axios from "axios";
import { getToken } from "./storage/localStorageService";

const apiUrl = import.meta.env.VITE_API_URL;

const apiGet = async (endpoint) => {
    try {
        const token = getToken({ data: false });

        console.log(token);

        const response = await axios.get(`${apiUrl}${endpoint}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const apiGetDocument = async (endpoint) => {
    try {
        const token = getToken({ data: false });

        const response = await axios.get(`${apiUrl}${endpoint}`, {
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

const apiPost = async (endpoint, data) => {
    try {
        if (endpoint === "/auth/login" || endpoint === "/auth/registro") {
            const response = await axios.post(`${apiUrl}${endpoint}`, data);
            return response;
        }

        const token = getToken({ data: false });

        const response = await axios.post(`${apiUrl}${endpoint}`, data, {
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

const apiPut = async (endpoint, data, token) => {
    try {
        const response = await axios.put(`${apiUrl}${endpoint}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const apiDelete = async (endpoint, token) => {
    try {
        const response = await axios.delete(`${apiUrl}${endpoint}`, {
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

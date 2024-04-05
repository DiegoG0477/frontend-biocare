import { apiGet } from "../axios";

export const getUsers = async () => {
    const response = await apiGet('/usuarios');
    return response;
}
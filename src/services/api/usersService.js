import { apiGet } from "../axios";

export const getUsers = async () => {
    const response = await apiGet('https://biocare.freemyip.com/api/usuarios');
    return response;
}
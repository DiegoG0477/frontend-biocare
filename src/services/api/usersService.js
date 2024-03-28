import { apiGet } from "../axios";

export const getUsers = async () => {
    const response = await apiGet('http://localhost:4000/usuarios');
    return response;
}
import { apiPost } from "../axios";
import { setToken } from "../storage/localStorageService";

const login = async (data) => {
  try {
    const response = await apiPost("http://localhost:4000/auth/login", data);
    
    if (response.data) {
        setToken(response.data.token);
    }
    
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const register = async (data) => {
    try {
        const response = await apiPost("http://localhost:4000/auth/registro", data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
    }

export { login, register };
import { apiPost } from "../axios";
import { setToken, setItem } from "../storage/localStorageService";

const login = async (data) => {
  try {
    const response = await apiPost("https://biocare.freemyip.com/api/auth/login", data);
    
    // if (response.data) {
    //     setToken(response.data.token);
    // }

    if (response.data) {
      const now = new Date();

      const item = {
          token: response.data.token,
          expiry: now.getTime() + 24 * 60 * 60 * 1000, // 24 horas en milisegundos
      }
      setToken(item);

      setItem("usuario", `${response.data.usuario.nombre} ${response.data.usuario.apellido}`);
  }
    
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const register = async (data) => {
    try {
        const response = await apiPost("https://biocare.freemyip.com/api/auth/registro", data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
    }

export { login, register };
import { apiGet, apiPost } from "../axios";

export const getMedEquipmentByAreaAndType = async (area, type) => {
    const response = await apiGet(`https://biocare.freemyip.com/api/equipos/${area}/${type}`);
    return response;
}

export const getAllMedEquipment = async () => {
    const response = await apiGet('https://biocare.freemyip.com/api/equipos');
    return response;
}

export const createMedEquipment = async (medEquipment) => {
    const response = await apiPost('https://biocare.freemyip.com/api/equipos', medEquipment);
    return response;
}
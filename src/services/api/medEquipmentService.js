import { apiGet, apiPost } from "../axios";

export const getMedEquipmentByAreaAndType = async (area, type) => {
    const response = await apiGet(`http://localhost:4000/equipos/${area}/${type}`);
    return response;
}

export const getAllMedEquipment = async () => {
    const response = await apiGet('http://localhost:4000/equipos');
    return response;
}

export const createMedEquipment = async (medEquipment) => {
    const response = await apiPost('http://localhost:4000/equipos', medEquipment);
    return response;
}
import { apiGet, apiPost } from "../axios";

export const getMedEquipmentByAreaAndType = async (area, type) => {
    const response = await apiGet(`/equipos/${area}/${type}`);
    return response;
}

export const getAllMedEquipment = async () => {
    const response = await apiGet('/equipos');
    return response;
}

export const createMedEquipment = async (medEquipment) => {
    const response = await apiPost('/equipos', medEquipment);
    return response;
}
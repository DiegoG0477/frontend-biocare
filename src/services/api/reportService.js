import { apiPost, apiGet } from "../axios";
import { getItem, setItem, clearStorage, getToken } from "../storage/localStorageService";

export const sendReport = async (reportType) => {
    const prioridad = getItem('prioridad');
    let prioridadId;

    if (prioridad === 'Alta') {
        prioridadId = 3;
    } else if (prioridad === 'Media') {
        prioridadId = 2;
    } else if(prioridad === 'Baja'){ //prioridad Baja
        prioridadId = 1;
    } else {
        prioridadId = 5; //No aplica
    }

    const data = {
        idTipoReporte: reportType,
        prioridadId,
        descripcion: getItem('descripcion'),
        area: getItem('areaSolicitante') || 'No aplica',
        consumible: getItem('consumibleSolicitado') || 'No aplica',
        falloReportado: getItem('falloReportado') || 'No aplica',
        estado: getItem('estado') || 'No aplica',
        equipoReportado: getItem('equipoReportado') || 'No aplica',
        capacitacionSolicitada: getItem('capacitacionSolicitada') || 'No aplica',
    };

    const token = getToken();
    await apiPost("http://localhost:4000/reportes", data);

    clearStorage();

    setItem('token', token);
};

export const getReports = async () => {
    const response = await apiGet('http://localhost:4000/reportes');
    return response;
}

import { apiPost } from "../axios";
import { getItem, setItem, clearStorage } from "../storage/localStorageService";

export const sendReport = async (reportType) => {
    const prioridad = getItem('prioridad');
    let prioridadId;

    if (prioridad === 'Alta') {
        prioridadId = 3;
    } else if (prioridad === 'Media') {
        prioridadId = 2;
    } else { //prioridad Baja
        prioridadId = 1;
    }

    const data = {
        idTipoReporte: reportType,
        prioridadId,
        descripcion: getItem('descripcion'),
        area: getItem('areaSolicitante') || 'No aplica',
        consumible: getItem('consumibleSolicitado') || 'No aplica',
        falloReportado: getItem('falloReportado') || 'No aplica',
        tipoEquipoReportado: getItem('tipoEquipoReportado') || 'No aplica',
        capacitacionSolicitada: getItem('capacitacionSolicitada') || 'No aplica',
    };

    const token = getItem('token');
    await apiPost("http://localhost:4000/reportes", data, token);

    clearStorage();

    setItem('token', token);
};

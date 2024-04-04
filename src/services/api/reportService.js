import { apiPost, apiGet } from "../axios";
import { getItem, setItem, clearStorage, getToken, removeItem } from "../storage/localStorageService";

export const sendReport = async (reportType) => {
    const prioridad = getItem('prioridad');
    let prioridadId;

    switch (prioridad) {
        case 'Alta':
            prioridadId = 3;
            break;
        case 'Media':
            prioridadId = 2;
            break;
        case 'Baja':
            prioridadId = 1;
            break;
        default:
            prioridadId = 5;
            break;
    }

    const data = {
        idTipoReporte: reportType,
        prioridadId,
        descripcion: getItem('descripcion') || 'No aplica',
        area: getItem('areaSolicitante') || 'No aplica',
        consumible: getItem('consumibleSolicitado') || 'No aplica',
        falloReportado: getItem('falloReportado') || 'No aplica',
        estado: getItem('estado') || 'No aplica',
        equipoReportado: getItem('equipoReportado') || 'No aplica',
        capacitacionSolicitada: getItem('capacitacionSolicitada') || 'No aplica',
        imgData: getItem('dataImg') || 'No aplica',
    };

    console.log(data);

    await apiPost("https://biocare.freemyip.com/api/reportes", data);

    const itemsToRemove = [
        'descripcion',
        'areaSolicitante',
        'consumibleSolicitado',
        'falloReportado',
        'estado',
        'equipoReportado',
        'capacitacionSolicitada',
        'dataImg',
        'prioridad',
    ];

    itemsToRemove.forEach(item => removeItem(item));
};

export const getReports = async () => {
    const response = await apiGet('https://biocare.freemyip.com/api/reportes');
    return response;
}

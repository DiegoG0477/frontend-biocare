import { apiGet, apiGetDocument } from "../axios";

export const getLastPdfId = async () => {
    const response = await apiGet("https://biocare.freemyip.com/api/reportes/pdf/last");
    return response.data;
}

export const downloadReport = async (data) => {
    const pdfReport = await apiGetDocument(`https://biocare.freemyip.com/api/reportes/pdf/${data.id}`);

    try {
        const blob = pdfReport.data; // Aquí cambiamos res.blob() por pdfReport.data
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'report-' + data.id;
        a.click();
        a.remove();
    } catch (error) {
        console.log(error);
    }
}
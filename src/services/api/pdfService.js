import { apiGet } from "../axios";

// export const getLastPdf = async () => {
//     const response = await apiGet("http://localhost:4000/reportes/pdf/last");
//     return response;
// }

export const getLastPdfId = async () => {
    const response = await apiGet("http://localhost:4000/reportes/pdf/last");
    return response.data;
}
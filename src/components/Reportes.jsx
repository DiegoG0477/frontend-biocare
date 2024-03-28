import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {useEffect, useState} from "react";
import {Button} from "primereact/button";
import {downloadReport} from "../services/api/pdfService";
import { getReports } from '../services/api/reportService';

export default function Reportes({reports}){

    const downloadButtonTemplate = (row) => {
        return(<Button style={{backgroundColor:'#56B5DD', borderRadius:'20px', margin:'2px 0 2px 0'}} onClick={()=>{
            downloadReport(row)
        }}>Descargar</Button>)
    }

    const dateTemplate = (date) => {
        const fecha = new Date(date.fecha)
        return(<p style={{margin: 'auto'}}>{fecha.toLocaleString()}</p>)
    }

    const priorityTemplate = (rowData) => {
        let backgroundColor;
        let styleProps = { borderRadius: '15px' };;
        if (rowData.prioridad === 'Alta') {
            backgroundColor = { backgroundColor: '#fa2525' };
        } else if (rowData.prioridad === 'Media') {
            backgroundColor = { backgroundColor: 'orange' };
        } else if (rowData.prioridad === 'Baja') {
            backgroundColor = { backgroundColor: '#eaff2b' };
        } else {
            backgroundColor = { backgroundColor: 'none' };
        }
        return (<p style={{ ...backgroundColor, ...styleProps }}>{rowData.prioridad}</p>);
    }

    return(
        <div style={{display:"flex", flexFlow:'column wrap', justifyContent:'space-evenly'}}>
            <h2 style={{marginTop:'2rem', marginLeft:'35rem'}}>Reportes</h2>
            <div style={{margin: "auto", justifyContent:"space-around", width:'fit-content'}}>
                <DataTable onCellClick={downloadReport} value={reports} tableStyle={{minWidth:'60em', textAlign:'center'}} paginator rows={20} paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown">
                    <Column field={'id'} header={"ID"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px'}}/>
                    <Column field={'usuario'} header={"Usuario"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'fecha'} body={dateTemplate} header={"Fecha"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'descripcion'} header={"Descripcion"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'tipo'} header={"Tipo"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'area'} header={"Area"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'prioridad'} header={"Prioridad"} body={priorityTemplate} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}  />
                    <Column body={downloadButtonTemplate} headerStyle={{backgroundColor:'#1D3557', color:"white",width: '20%', padding:' 10px 0 10px 0'}} header={'Descargar Reporte'}></Column>
                </DataTable>
            </div>
        </div>
    )
}
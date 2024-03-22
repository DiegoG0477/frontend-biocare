import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {useEffect, useState} from "react";
import {Button} from "primereact/button";
export default function Reportes(){
    const [users, setUsers] = useState([])
    console.log(users)
    const downloadReport = async (data) => {
        const pdfReport = fetch('http://localhost:4000/reportes/pdf/'+data.id, {
            headers: {
                'Content-Type': 'application/pdf'
            }
        })
            .then(res => res.blob())
            .then(res => {
                var url = window.URL.createObjectURL(res)
                var a = document.createElement('a')
                a.href = url
                a.download = 'report-'+data.id
                a.click()
                a.remove()
                }
            )
        console.log(await pdfReport)
    }
    const downloadButtonTemplate = (row) => {
        return(<Button style={{backgroundColor:'#56B5DD', borderRadius:'20px', margin:'2px 0 2px 0'}} onClick={()=>{
            downloadReport(row)
        }}>Descargar</Button>)
    }

    const dateTemplate = (date) => {
        const fecha = new Date(date.fecha)
        return(<p style={{margin: 'auto'}}>{fecha.toLocaleString()}</p>)
    }

    useEffect(()=>{
        const fetchUsers = ()=> {
            fetch('http://localhost:4000/reportes').then(response => response.json())
                .then(response => setUsers(response))
        }
        fetchUsers()
    },[])

    return(
        <div style={{display:"flex", flexFlow:'column wrap', justifyContent:'space-evenly'}}>
            <h2 style={{marginTop:'2rem', marginLeft:'35rem'}}>Reportes</h2>
            <div style={{margin: "auto", justifyContent:"space-around", width:'fit-content'}}>
                <DataTable onCellClick={downloadReport} value={users} tableStyle={{minWidth:'50rem', textAlign:'center'}}>
                    <Column field={'id'} header={"ID"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'fecha'} body={dateTemplate} header={"Fecha"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'descripcion'} header={"Descripcion"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'tipo'} header={"Tipo"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'prioridad'} header={"Prioridad"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column body={downloadButtonTemplate} headerStyle={{backgroundColor:'#1D3557', color:"white",width: '20%', padding:' 10px 0 10px 0'}} header={'Descargar Reporte'}></Column>
                </DataTable>
            </div>

        </div>

    )
}
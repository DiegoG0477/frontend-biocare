import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {useEffect, useState} from "react";
export default function InventarioUsuarios({users}){

    return(
        <div style={{display:"flex", flexFlow:'column wrap', justifyContent:'space-evenly'}}>
            <h2 style={{marginTop:'2rem', marginLeft:'35rem'}}>Usuarios</h2>
            <div style={{margin: "auto", justifyContent:"space-around", width:'fit-content'}}>
                <DataTable value={users} tableStyle={{minWidth:'50rem', textAlign:'center'}}  paginator rows={20} paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown">
                    <Column field={'id'} header={"ID"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'correo'} header={"Correo"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'nombre'} header={"Nombre"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'apellido'} header={"Apellido"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'rol'} header={"Rol"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>

                </DataTable>
            </div>

        </div>

    )
}
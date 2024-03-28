import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
export default function EquiposMed({medEquipments}){

    const dateTemplate = (date) => {
        const fecha = new Date(date.fecha_instalacion)
        const fechaSinHora = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
        return(<p style={{margin: 'auto'}}>{fechaSinHora.toLocaleDateString()}</p>);
    }

    return(
        <div style={{display:"flex", flexFlow:'column wrap', justifyContent:'space-evenly'}}>
            <h2 style={{marginTop:'2rem', marginLeft:'35rem'}}>Equipos Médicos</h2>
            <div style={{margin: "auto", justifyContent:"space-around", width:'fit-content'}}>
                <DataTable value={medEquipments} tableStyle={{minWidth:'55em', textAlign:'center'}}  paginator rows={20} paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown">
                    <Column field={'no_inventario'} header={"No.Inventario"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px '}}/>
                    <Column field={'nombre'} header={"Nombre"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'marca'} header={"Marca"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'modelo'} header={"Modelo"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'descripcion'} header={"Descripción"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'fecha_instalacion'} body={dateTemplate} header={"Fecha Instalación"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'area'} header={"Area"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                    <Column field={'tipoEquipo'} header={"Tipo"} headerStyle={{backgroundColor:'#1D3557', color:"white", padding:' 10px 0 10px 0'}}/>
                </DataTable>
            </div>

        </div>

    )
}
import "../styles/register.css";
import CustomInput from "./CustomInput.jsx";
export default function EquiposMedicosForm(){
    return(
        <div className={"register-form"}>
            <div className={"register-title"}>
                <h1 id={"title-register"}>Registro de Equipos Medicos</h1>
            </div>
            <div className={"register-inputs"}>
                <CustomInput id={"nombre"} label={"Nombre"} type={"text"}/>
                <CustomInput id={"marca"} label={"Marca"} type={"text"}/>
                <CustomInput id={"modelo"} label={"Modelo"} type={"text"}/>
                <CustomInput id={"descripcion"} label={"Descripcion del equipo medico"} type={"text"}/>
                <CustomInput id={"area"} label={"Ubicacion (Area)"} type={"text"}/>
                <CustomInput id={"estado"} label={"Estado de uso"} type={"text"}/>
                <CustomInput id={"fecha"} label={"Fecha de instalacion"} type={"date"}/>
            </div>
            <div id={'submit'}>
                <button id={"submit-form"} onClick={(e)=>{}}>Registrar Equipo</button>
            </div>

        </div>
    )
}
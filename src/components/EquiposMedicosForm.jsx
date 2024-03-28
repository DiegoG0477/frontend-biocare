import { useState } from "react";
import useCustomNav from "../helpers/hooks/useCustomNav.js";
import "../styles/register.css";
import CustomInput from "./CustomInput.jsx";
import FormDropdown from "./FormDropdown.jsx";
import { areasList } from "../helpers/data/areasList.js";
import { medEquiposList } from "../helpers/data/medEquiposList.js";
import { createMedEquipment } from "../services/api/medEquipmentService.js";

export default function EquiposMedicosForm() {
    const areasNames = areasList.map((area) => area.name);
    const tiposEquipos = medEquiposList.map((equipo) => equipo.name);
    const { handleBackNav } = useCustomNav();

    const [medEquipment, setMedEquipment] = useState({
        noInventario: "",
        nombre: "",
        marca: "",
        modelo: "",
        descripcion: "",
        area: "",
        tipoEquipo: "",
        fechaInstalacion: "",
    });

    const handleChange = (e) => {
        setMedEquipment({
            ...medEquipment,
            [e.target.id]: e.target.value,
        });
    };

    const handleMedEquipmentSubmit = async () => {
        try {
            const response = await createMedEquipment(medEquipment);

            if(response.status == 201) {
                alert("Equipo registrado con éxito!");
            }

        } catch (error) {
            alert("Error al registrar el equipo");
        }
    };

    return (
        <div className={"register-form"}>
            <div className={"register-title"}>
                <h1 id={"title-register"}>Registro de Equipos Medicos</h1>
            </div>
            <div className={"register-inputs"}>
                <CustomInput
                    id={"noInventario"}
                    label={"No. de Inventario"}
                    type={"text"}
                    onChange={(e) => handleChange(e)}
                />
                <CustomInput
                    id={"nombre"}
                    label={"Nombre"}
                    type={"text"}
                    onChange={(e) => handleChange(e)}
                />
                <CustomInput
                    id={"marca"}
                    label={"Marca"}
                    type={"text"}
                    onChange={(e) => handleChange(e)}
                />
                <CustomInput
                    id={"modelo"}
                    label={"Modelo"}
                    type={"text"}
                    onChange={(e) => handleChange(e)}
                />
                <CustomInput
                    id={"descripcion"}
                    label={"Descripcion del equipo medico"}
                    type={"text"}
                    onChange={(e) => handleChange(e)}
                />
                <FormDropdown
                    id={"area"}
                    label={"Ubicación (Área)"}
                    options={areasNames}
                    onChange={(e) => handleChange(e)}
                />
                <FormDropdown
                    id={"tipoEquipo"}
                    label={"Tipo de Equipo"}
                    options={tiposEquipos}
                    onChange={(e) => handleChange(e)}
                />
                <CustomInput
                    id={"fechaInstalacion"}
                    label={"Fecha de instalación"}
                    type={"date"}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div id={"submit-equipo"}>
                <button
                    onClick={() => {
                        handleBackNav();
                    }}
                    id={"submit-form"}
                >
                    Regresar
                </button>
                <button id={"submit-form"} onClick={handleMedEquipmentSubmit}>
                    Registrar Equipo
                </button>
            </div>
        </div>
    );
}

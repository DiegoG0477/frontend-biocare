import { useState, useEffect } from "react";
import { getMedEquipmentByAreaAndType } from "../../../services/api/medEquipmentService.js";
import { Button } from "primereact/button";
import CustomInput from "../../CustomInput.jsx";
import { setItem, getItem } from "../../../services/storage/localStorageService.js";
import accesorio from '../../../assets/Iconos/image 14.png'
import bad from '../../../assets/Iconos/image 13.png'
import alarma from '../../../assets/Iconos/image 12.png'
import { areasList } from "../../../helpers/data/areasList.js";
import { medEquiposList } from "../../../helpers/data/medEquiposList.js";
import IconDataCard from "../../IconDataCard.jsx";

import "../../../styles/main/solicitudes.css";


export default function AreaBoxes({ page, setCantPages, setDescripcion }) {
    const [inventoryNumber, setInventoryNumber] = useState([]);

    useEffect(() => {
        setCantPages(mantenimientoViews.length);
        console.log("mantenimientoViews.length", mantenimientoViews.length);
    }, []);

    const descriptionChange = (value) => {
        return setDescripcion(value);
    }

    const handleGetMedEquipment = async (typeEquipment) => {
        const equiposArea = await getMedEquipmentByAreaAndType(getItem('areaSolicitante'), typeEquipment);

        setItem('equiposArea', equiposArea);

        setInventoryNumber(getItem('equiposArea'));
        console.log("inventoryNumber", inventoryNumber);
    }

    const highPriority = () => {
        return (
            <>
                <svg width={100} height={100}>
                    <circle cx={50} cy={50} r={40} stroke={'red'} fill={'red'}/>
                </svg>
                <p>{'ALTA'}</p>
            </>
        )
    }

    const medPriority = () => {
        return (
            <>
                <svg width={100} height={100}>
                    <circle cx={50} cy={50} r={40} fill={'#ED5210'}/>
                </svg>
                <p>{'MEDIA'}</p>
            </>
        )
    }

    const lowPriority = () => {
        return (
            <>
                <svg width={100} height={100}>
                    <circle cx={50} cy={50} r={40} fill={'#457B9D'}/>
                </svg>
                <p>{'BAJA'}</p>
            </>
        )
    }

    const badFunction = () => {
        return (
            <>
                <img src={bad} alt=""/>
                <p>{'No enciende'}</p>
            </>
        )
    }

    const badStatus = () => {
        return (
            <>
                <img src={accesorio} alt=""/>
                <p>{'En mal estado'}</p>
            </>
        )
    }

    const alarm = () => {
        return (
            <>
                <img src={alarma} alt=""/>
                <p>{'Alarma'}</p>
            </>
        )
    }

    const activeMed = () => {
        return(
            <>
                <svg width={100} height={100}>
                    <circle cx={50} cy={50} r={40} fill={"#63DD58"} />
                </svg>
                <p>{"ACTIVO"}</p>
            </>
        );
    }

    const inactiveMed = () => {
        return(
            <>
                <svg width={100} height={100}>
                    <circle cx={50} cy={50} r={40} fill={"#ED5210"} />
                </svg>
                <p>{"INACTIVO"}</p>
            </>
        )
    }

    const mantenimientoViews = [
        (<div key={1} className="form-view">
            <h2>1. ¿En qué área se solicita el mantenimiento?</h2>
            <div>
                {areasList.length < 1 ? (
                    <div>
                        <h3>No hay areas existentes.</h3>
                    </div>
                ) : (
                    <div className="option-boxes-div">
                        {areasList.map((area) => (
                            <IconDataCard key={area.key} img={area.img} name={area.name} onClick={() => setItem('areaSolicitante', area.name)} />
                        ))}
                    </div>
                )}
            </div>
        </div>),

        (<div key={2} className="form-view">
            <h2>2. ¿Qué tipo de equipo médico desea reportar?</h2>
            <div className="equipos-list">
                {medEquiposList.map((equipo) => (
                    <IconDataCard key={equipo.key} img={equipo.img} name={equipo.name} onClick={() => handleGetMedEquipment(equipo.name)} />
                ))}
            </div>
        </div>),

        (<div key={3} className="form-view">
            <h2>3. Seleccione el equipo médico en mal estado:</h2>

            <div className="option-boxes-div">
                <select className='mantenimiento-select' name="equipo-reportado" id="no-inventory" onChange={e => {setItem('equipoReportado', (e.target.value))}}>
                    <option value="" disabled selected>No. de Inventario</option>
                    {inventoryNumber.map((inventory) => (
                        <option value={inventory.no_inventario} key={inventory.no_inventario}>{`No.${inventory.no_inventario}: ${inventory.marca} - ${inventory.modelo}`}</option>
                    ))}
                </select>
            </div>
        </div>),

        (<div key={4} className="form-view">
            <h2>4. Fallo reportado:</h2>
            <div className="option-boxes-div">
                <Button className={"priority-button"}  onClick={() => setItem('falloReportado', 'no enciende')}>{badFunction()} </Button>
                <Button className={"priority-button"} onClick={() => setItem('falloReportado', 'mal estado')}>{badStatus()}</Button>
                <Button className={"priority-button"} onClick={() => setItem('falloReportado', 'alarma')}>{alarm()}</Button>
            </div>
        </div>),

        (<div key={5} className="form-view">
            <h2>5. ¿En qué estado se encuentra el equipo?</h2>
            <div className="option-boxes-div">
                <Button className={"priority-button"} onClick={() => setItem('estado', 'activo') } >{activeMed()} </Button>
                <Button className={"priority-button"} onClick={() => setItem('estado', 'inactivo') } >{inactiveMed()}</Button>
            </div>
        </div>),

        (<div key={6} className="form-view">
            <h2>6. ¿Cuál es el nivel de prioridad?</h2>
            <div className="option-boxes-div">
                <Button className={"priority-button"} onClick={() => setItem('prioridad', 'Alta')}>{highPriority()} </Button>
                <Button className={"priority-button"} onClick={() => setItem('prioridad', 'Alta')}>{medPriority()}</Button>
                <Button className={"priority-button"} onClick={() => setItem('prioridad', 'Alta')}>{lowPriority()}</Button>
            </div>
        </div>),

        (<div key={6} className="form-view">
            <h3>5. Escriba una descripción del reporte agregando más detalles</h3>
            <div>
                <CustomInput type={'text'} label={'Detalles: '} id={'equipo-detalles-mantenimiento'}
                            onChange={(e) => descriptionChange(e.target.value)}/>
            </div>
        </div>),
    ];

    return mantenimientoViews[page - 1];
}
import { useState, useEffect } from "react";
import CustomInput from "../../CustomInput.jsx";
import { Button } from "primereact/button";
import accesorio from '../../../assets/Iconos/image 14.png'
import bad from '../../../assets/Iconos/image 13.png'
import alarma from '../../../assets/Iconos/image 12.png'
import { areasList } from "../../../helpers/data/areasList.js";
import { medEquiposList } from "../../../helpers/data/medEquiposList.js";

import "../../../styles/main/solicitudes.css";


export default function AreaBoxes({ page, setCantPages }) {
    const [nombre, setNombre] = useState(null)

    useEffect(() => {
        setCantPages(consumiblesViews.length);
        console.log("consumiblesViews.length", consumiblesViews.length);
    }, []);

    const nameChange = (value) => {
        return setNombre(value);
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

    const consumiblesViews = [
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
                            <div key={area.key} className="icon-data-card">
                                <div className="icon-box">
                                    <img src={area.img} alt="" />
                                </div>

                                <div className="text-box">
                                    <p>{area.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>),

        (<div key={2} className="form-view">
            <h2>2. ¿Qué tipo de equipo médico desea reportar?</h2>
            <div className="equipos-list">
                {medEquiposList.map((equipo) => (
                    <div key={equipo.key} className="icon-data-card">
                        <div className="icon-box">
                            <img src={equipo.img} alt="" />
                        </div>

                        <div className="text-box">
                            <p>{equipo.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>),

        (<div key={4} className="form-view">
            <h2>3. ¿En qué estado se encuentra el equipo?</h2>
            <div className="option-boxes-div">
                <Button className={"priority-button"}>{badFunction()} </Button>
                <Button className={"priority-button"}>{badStatus()}</Button>
                <Button className={"priority-button"}>{alarm()}</Button>
            </div>
        </div>),

        (<div key={5} className="form-view">
            <h2>4. ¿Cuál es el nivel de prioridad?</h2>
            <div className="option-boxes-div">
                <Button className={"priority-button"}>{highPriority()} </Button>
                <Button className={"priority-button"}>{medPriority()}</Button>
                <Button className={"priority-button"}>{lowPriority()}</Button>
            </div>
        </div>),
    ];

    return consumiblesViews[page - 1];
}
import { useState, useEffect } from "react";
import CustomInput from "../../CustomInput.jsx";
import { Button } from "primereact/button";
import accesorio from '../../../assets/Iconos/image 14.png'
import bad from '../../../assets/Iconos/image 13.png'
import alarma from '../../../assets/Iconos/image 12.png'
import { areasList } from "../../../helpers/data/areasList.js";
import { capacitacionesList } from "../../../helpers/data/capacitacionesList.js";

export default function AreaCapacitacion({ page, setCantPages }) {
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
            <h2>1. ¿En qué área se solicita la capacitación?</h2>
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
            <h2>2. ¿Qué tipo de capacitación necesita?</h2>
            <div className="option-boxes-div">
                {capacitacionesList.map((capacitacion) => (
                    <div key={capacitacion.key} className="icon-data-card">
                        <div className="icon-box">
                            <img src={capacitacion.img} alt="" />
                        </div>

                        <div className="text-box">
                            <p>{capacitacion.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>),

        (<div key={3} className="form-view">
            <h3>3. Escriba los detalles u observaciones</h3>
            <div>
                <CustomInput type={'text'} label={'Detalles: '} id={'equipo-detalles-mantenimiento'}
                            onChange={(e) => nameChange(e.target.value)}/>
            </div>
        </div>),
    ];

    return consumiblesViews[page - 1];
}
import { useState, useEffect } from "react";
import CustomInput from "../../CustomInput.jsx";
import IconDataCard from "../../IconDataCard.jsx";
import { areasList } from "../../../helpers/data/areasList.js";
import { setItem } from "../../../services/storage/localStorageService.js";
import { capacitacionesList } from "../../../helpers/data/capacitacionesList.js";

export default function AreaCapacitacion({ page, setCantPages, setDescripcion }) {

    useEffect(() => {
        setCantPages(capacitacionesViews.length);
        console.log("capacitacionesViews.length", capacitacionesViews.length);
    }, []);

    const descriptionChange = (value) => {
        return setDescripcion(value);
    }

    const setData = (name, img) => {
        setItem('capacitacionSolicitada', name);
        setItem('dataImg', img);
    }

    const capacitacionesViews = [
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
                            <IconDataCard key={area.key} img={area.img} name={area.name} onClick={() => setItem('areaSolicitante', area.name)} />
                        ))}
                    </div>
                )}
            </div>
        </div>),

        (<div key={2} className="form-view">
            <h2>2. ¿Qué tipo de capacitación necesita?</h2>
            <div className="option-boxes-div">
                {capacitacionesList.map((capacitacion) => (
                    <IconDataCard key={capacitacion.key} img={capacitacion.img} name={capacitacion.name} onClick={() => setData(capacitacion.name, capacitacion.img)} />
                ))}
            </div>
        </div>),

        (<div key={3} className="form-view">
            <h3>3. Escriba una descripción del reporte agregando más detalles</h3>
            <div>
                <CustomInput type={'text'} label={'Detalles: '} id={'equipo-detalles-mantenimiento'}
                            onChange={(e) => descriptionChange(e.target.value)}/>
            </div>
        </div>),
    ];

    return capacitacionesViews[page - 1];
}
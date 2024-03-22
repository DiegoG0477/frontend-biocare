import AreaBoxes from './Mantenimiento/AreaBoxes.jsx'
import {useEffect, useState} from "react";
import AreaCapacitacion from "./Capacitacion/AreaCapacitacion.jsx";
import Consumibles from "./Consumibles/Consumibles.jsx";
import '../../styles/main/solicitudes.css';

export default function MainBox({ selectedOption, page, setCantPages }){
    return(
        <div className='selection-box'>
            {selectedOption === 1 && <Consumibles page={page} setCantPages={setCantPages} />}
            {selectedOption === 2 && <AreaBoxes page={page} setCantPages={setCantPages} />}
            {selectedOption === 3 && <AreaCapacitacion page={page} setCantPages={setCantPages} />}
        </div>
    )
}
import { useEffect } from "react";
import CustomInput from "../../CustomInput.jsx";
import { Button } from "primereact/button";
import "../../../styles/consumibleForm.css";
import { areasList } from "../../../helpers/data/areasList.js";
import { consumiblesList } from "../../../helpers/data/consumiblesList.js";
import IconDataCard from "../../IconDataCard.jsx";
import "../../../styles/main/solicitudes.css";

export default function Consumibles({ page, setCantPages }) {
    useEffect(() => {
        setCantPages(consumiblesViews.length);
        console.log("consumiblesViews.length", consumiblesViews.length);
    }, []);

    const highPriority = () => {
        return (
            <>
                <svg width={100} height={100}>
                    <circle
                        cx={50}
                        cy={50}
                        r={40}
                        stroke={"red"}
                        fill={"red"}
                    />
                </svg>
                <p>{"ALTA"}</p>
            </>
        );
    };

    const medPriority = () => {
        return (
            <>
                <svg width={100} height={100}>
                    <circle cx={50} cy={50} r={40} fill={"#ED5210"} />
                </svg>
                <p>{"MEDIA"}</p>
            </>
        );
    };

    const lowPriority = () => {
        return (
            <>
                <svg width={100} height={100}>
                    <circle cx={50} cy={50} r={40} fill={"#457B9D"} />
                </svg>
                <p>{"BAJA"}</p>
            </>
        );
    };

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

    // la logica sera la siguiente
    // manejar un useState de las id's de los divs dependiendo de cada pantalla
    //cada div, tendra un id que sera modificado desde el componente padre cuando
    //el usuario ahga click en el boton de continuar
    //de acuerdo a las elecciones del usuario, guardar en localStorage / cache
    // los valores de las elecciones del usuario
    // en el componente de la pantalla final, se hara un fetch a la base de datos
    // para obtener los valores de los consumibles y areas, y se hara un fetch
    // a la base de datos para obtener los valores de las prioridades

    const consumiblesViews = [
        (<div key={1} className="form-view">
            <h2>1. ¿Qué consumible o accesorio desea solicitar?</h2>
            <div>
                {/*Todos los items que estan en la base de datos para representarlos...*/}
                {consumiblesList.length < 1 ? (
                    <div>
                        <h3>No hay consumibles en existencia.</h3>
                    </div>
                ) : (
                    <div className="option-boxes-div">
                        {consumiblesList.map((consumible) => (
                            <IconDataCard key={consumible.key} img={consumible.img} name={consumible.name} />
                        ))}
                    </div>
                )}
            </div>
        </div>),

        (<div key={2} className="form-view">
            <h2>2. ¿En qué área?</h2>

            <div>
                {areasList.length < 1 ? (
                    <div>
                        <h3>No hay areas existentes.</h3>
                    </div>
                ) : (
                    <div className="option-boxes-div">
                        {areasList.map((area) => (
                            <IconDataCard key={area.key} img={area.img} name={area.name} />
                        ))}
                    </div>
                )}
            </div>
        </div>),

        (<div key={3} className="form-view">
            <h2>3. ¿Cuál es el nivel de prioridad?</h2>
            <div className="option-boxes-div">
                <Button className={"priority-button"}>{highPriority()} </Button>
                <Button className={"priority-button"}>{medPriority()}</Button>
                <Button className={"priority-button"}>{lowPriority()}</Button>
            </div>
        </div>),

        (<div key={4} className="form-view">
            <h2>4. ¿En qué estado se encuentra el equipo?</h2>
            <div className="option-boxes-div">
                <Button className={"priority-button"}>{activeMed()} </Button>
                <Button className={"priority-button"}>{inactiveMed()}</Button>
            </div>
        </div>),
    ];

    return consumiblesViews[page - 1];
}

import "../styles/ayuda.css";
import AlertIcon from "./AlertIcon.jsx";
import connection from "../assets/Iconos/conectar.png";
import cables from "../assets/Iconos/cable-av.png";
import ruedas from "../assets/Iconos/ejecucion 1.png";
import { useNavigate } from "react-router-dom";

export default function Ayuda() {
    const navigate = useNavigate();
    return (
        <div className={"view-component"}>
            <div className="help-container">
                <h1 className={"header"}>Semaforo de Reportes</h1>
                <div className={"alert-container"}>
                    <div id={"red-alert"}>
                        <AlertIcon color={"#E63946"} />
                        <p className={"alert-label"}>Alto</p>
                        <p className={"details"}>
                            El equipo médico presenta una falla crítica que
                            afecta directamente la seguridad y el tratamiento
                            del paciente.
                        </p>
                    </div>
                    <div id={"yellow-alert"}>
                        <AlertIcon color={"#EDA210"} />
                        <p className={"alert-label"}>Medio</p>
                        <p className={"details"}>
                            {" "}
                            El equipo médico tiene un problema que afecta su
                            funcionamiento, pero no pone en riesgo la vida del
                            paciente.
                        </p>
                    </div>
                    <div id={"green-alert"}>
                        <AlertIcon color={"#D7FF36"} />
                        <p className={"alert-label"}>Bajo</p>
                        <p className={"details"}>
                            {" "}
                            El equipo médico tiene una falla menor que no afecta
                            significativamente su rendimiento ni la atención al
                            paciente.
                        </p>
                    </div>
                </div>

                <h1 className={"header"}>Recomendaciones</h1>
                <div className={"recommendations-container"}>
                    <div id={"red-alert"}>
                        <img
                            src={connection}
                            className="medical-equipment"
                            alt="conexion de equipos"
                        />
                        <p className={"details"}>
                            Verifica correctamente las conexiones del equipo
                            médico a la red eléctrica y sus accesorios
                        </p>
                    </div>
                    <div id={"yellow-alert"}>
                        <img
                            src={cables}
                            className="medical-equipment"
                            alt="conexion de equipos"
                        />
                        <p className={"details"}>
                            Verifica la correcta conexión a la red electrica y
                            uso de los accesorios del equipo médico en el
                            paciente.
                        </p>
                    </div>
                    <div id={"green-alert"}>
                        <img
                            src={ruedas}
                            className="medical-equipment"
                            alt="conexion de equipos"
                        />
                        <p className={"details"}>
                            {" "}
                            Verifica la configuración adecuada del equipo médico
                            para su uso previsto
                        </p>
                    </div>
                </div>
                <div className="btn-container">
                    <button
                        id={"exit-button"}
                        onClick={() => {
                            navigate("/main");
                        }}
                    >
                        Listo
                    </button>
                </div>
            </div>
        </div>
    );
}

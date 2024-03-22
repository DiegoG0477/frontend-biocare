import useCustomNav from "../helpers/hooks/useCustomNav.js";
import "../styles/register.css";
import CustomInput from "./CustomInput.jsx";
import { useState } from "react";

export default function RegisterForm() {
    const [nombre, setNombre] = useState(null);
    const [apellidoPaterno, setApellidoPaterno] = useState(null);
    const [apellidoMaterno, setApellidoMaterno] = useState(null);
    const [hospital, setHospital] = useState(null);
    const [password, setPassword] = useState(null);

    const { handleBackNav } = useCustomNav();

    const register = () => {
        fetch("http://localhost:4000/usuarios/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre: nombre,
                apellidoPaterno: apellidoPaterno,
                apellidoMaterno: apellidoMaterno,
                hospital: hospital,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((r) => {
                if (r) {
                    window.alert(r);
                } else window.alert(r.message);
            })
            .catch((e) => window.alert(e));
    };

    return (
        <div className={"register-form"}>
            <div className={"register-title"}>
                <h1 id={"title-register"}>Registrarse</h1>
            </div>
            <div className={"register-inputs"}>
                <CustomInput
                    id={"nombre"}
                    label={"Nombre"}
                    type={"text"}
                    onChange={(e) => {
                        setNombre(e.target.value);
                    }}
                />
                <CustomInput
                    id={"apellido-paterno"}
                    label={"Apellido Paterno"}
                    type={"text"}
                    onChange={(e) => {
                        setApellidoPaterno(e.target.value);
                    }}
                />
                <CustomInput
                    id={"apellido-materno"}
                    label={"Apellido Materno"}
                    type={"text"}
                    onChange={(e) => {
                        setApellidoMaterno(e.target.value);
                    }}
                />
                <CustomInput
                    id={"hospital"}
                    label={"Hospital perteneciente"}
                    type={"text"}
                    onChange={(e) => {
                        setHospital(e.target.value);
                    }}
                />
                <CustomInput
                    id={"password"}
                    label={"Contraseña"}
                    type={"password"}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <div id={"submit"}>
                <button
                    id={"submit-form"}
                    onClick={() => {
                        handleBackNav();
                    }}
                >
                    Regresar
                </button>

                <button
                    id={"submit-form"}
                    onClick={() => {
                        register();
                    }}
                >
                    Registrarse
                </button>
            </div>
        </div>
    );
}

import useCustomNav from "../helpers/hooks/useCustomNav.js";
import "../styles/register.css";
import CustomInput from "./CustomInput.jsx";
import { useState } from "react";
import { register } from "../services/auth/authService.js";

export default function RegisterForm() {
    const [nombre, setNombre] = useState(null);
    const [apellidoPaterno, setApellidoPaterno] = useState(null);
    const [apellidoMaterno, setApellidoMaterno] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { handleBackNav, handleNavTo } = useCustomNav();

    const handleRegister = async () => {
        const data = {
            nombre: nombre,
            apellidoPaterno: apellidoPaterno,
            apellidoMaterno: apellidoMaterno,
            correo: email,
            password: password,
            rol: "user",
        };

        const response = await register(data);

        if (response) {
            console.log(response);
            handleNavTo("/login");
        }
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
                    label={"Correo"}
                    type={"text"}
                    onChange={(e) => {
                        setEmail(e.target.value);
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
                        handleRegister();
                    }}
                >
                    Registrarse
                </button>
            </div>
        </div>
    );
}

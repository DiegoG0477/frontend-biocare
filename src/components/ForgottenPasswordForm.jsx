import useCustomNav from "../helpers/hooks/useCustomNav.js";
import "../styles/forgotten.css";
import CustomInput from "./CustomInput.jsx";
import { useState } from "react";
export default function ForgottenPasswordForm() {
    const [username, setUsername] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [confirmation, setConfirmation] = useState(null);

    const { handleBackNav } = useCustomNav();

    const recover = () => {
        if (newPassword === confirmation) {
            fetch("http://localhost:4000/usuarios/recuperar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    correo: username,
                    password: password,
                }),
            })
                .then((res) => res.json())
                .then((r) => {
                    if (r.usuario) navigate("/main");
                    else window.alert(r.message);
                })
                .catch((e) => window.alert(e));
        } else {
            window.alert("Las contraseñas no coinciden.");
        }
    };
    return (
        <div className="forgot-form">
            <div className={"forgot-title"}>
                <h1 id={"title-forgot"}>Recuperar contraseña</h1>
            </div>
            <div className="forgot-inputs">
                <CustomInput
                    id={"username"}
                    type={"email"}
                    label={"Correo de usuario"}
                    onChange={(evt) => {
                        setUsername(evt.target.value);
                    }}
                />
                <CustomInput
                    id={"new"}
                    type={"password"}
                    label={"Clave nueva"}
                    onChange={(evt) => {
                        setNewPassword(evt.target.value);
                    }}
                />
                <CustomInput
                    id={"confirmation"}
                    type={"password"}
                    label={"Confirme su nueva clave"}
                    onChange={(evt) => {
                        setConfirmation(evt.target.value);
                    }}
                />
            </div>

            <div className="buttons">
                <button id="submit" onClick={handleBackNav}>
                    Regresar
                </button>

                <button id={"submit"} type="submit">
                    Recuperar Clave
                </button>
            </div>
        </div>
    );
}

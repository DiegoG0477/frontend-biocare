import useCustomNav from "../helpers/hooks/useCustomNav";
import "../styles/login.css";
import { useState } from "react";
import { setItem } from "../services/storage/localStorageService";
import { login } from "../services/auth/authService";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleNavRefreshTo, handleNavTo } = useCustomNav();

    const handleLogin = async () => {
        const data = {
            correo: email,
            password: password,
        };

        const response = await login(data);

        if (response) {
            console.log(response);
            console.log(response.data.signedRole);

            setItem("role_session", response.data.signedRole);

            if (response.data.rol === "admin") {
                handleNavRefreshTo("/dashboard");
            } else {
                handleNavRefreshTo("/main");
            }
        }
    }

    return (
        <div className={"login-form"}>
            <div className={"login-title"}>
                <h1 id={"title-login"}>Inicia sesión</h1>
            </div>
            <div className={"login-inputs"}>
                <label htmlFor={"user"}>Correo</label>
                <input
                    type={"text"}
                    id={"user"}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setEmail(e.target.value);
                    }}
                />
                <label htmlFor={"password-input"}>Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password-input"
                    onChange={(evt) => {
                        console.log(evt.target.value);
                        setPassword(evt.target.value);
                    }}
                />
            </div>

            <div className={"buttons"}>
                <button
                    id={"signin"}
                    type={"submit"}
                    onClick={() => {
                        handleLogin();
                    }}
                >
                    Ingresar
                </button>

                <button
                    onClick={() => {
                        handleNavTo("/registrar");
                    }}
                >
                    Registrarse
                </button>
            </div>

            <div className={"forgot-password"}>
                <button
                    style={{ backgroundColor: "rgba(0,0,0,0)" }}
                    onClick={() => {
                        handleNavTo("/recuperar-password");
                    }}
                >
                    ¿Olvidó su contraseña?
                </button>
            </div>
        </div>
    );
}

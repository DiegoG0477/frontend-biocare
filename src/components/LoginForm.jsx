import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function LoginForm() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const login = (evt, username, password) => {
        console.log(`${username} Con ${password} se esta logueando`);
        const authenticate = fetch("http://localhost:4000/usuarios/login", {
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
        //navigate('/main')
    };
    const navigate = useNavigate();
    return (
        <div className={"login-form"}>
            <div className={"login-title"}>
                <h1 id={"title-login"}>Inicia sesión</h1>
            </div>
            <div className={"login-inputs"}>
                <label htmlFor={"user"}>Usuario</label>
                <input
                    type={"text"}
                    id={"user"}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setUsername(e.target.value);
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
                    onClick={(evt) => {
                        login(evt, username, password);
                    }}
                >
                    Ingresar
                </button>

                <button
                    onClick={() => {
                        navigate("/registrar");
                    }}
                >
                    Registrarse
                </button>
            </div>

            <div className={"forgot-password"}>
                <button
                    style={{ backgroundColor: "rgba(0,0,0,0)" }}
                    onClick={() => {
                        navigate("/recuperar-password");
                    }}
                >
                    ¿Olvidó su contraseña?
                </button>
            </div>
        </div>
    );
}

import "../styles/home.css";
import biocareLogo from "../assets/img/logoBiocare.png";

const Home = ({ children }) => {
    return (
        <main className="non-user-container">
        {/* <main className={"container"} > */}
            <div id={"logo-container"}>
                <img
                    id={"logo-image"}
                    src={biocareLogo}
                    alt="Logo de la clinica biomedica Biocare"
                />
            </div>
            <div id={"form-container"}>{children}</div>
        {/* </main> */}
        </main>

    );
};

export default Home;

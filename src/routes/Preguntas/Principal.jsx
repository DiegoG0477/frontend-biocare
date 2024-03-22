import { useEffect, useState } from "react";
import useCustomNav from "../../helpers/hooks/useCustomNav.js";
import { Button } from "primereact/button";
import "../../styles/main/solicitudes.css";

import Navbar from "../../components/Navbar.jsx";
import BoxContainer from "../../components/BoxContainer.jsx";
import AreaBoxes from "../../components/Boxes/Mantenimiento/AreaBoxes.jsx";
import MainBox from "../../components/Boxes/Main.jsx";
import { useNavigate } from "react-router-dom";
import SOSButton from "../../components/SOSButton.jsx";

export const Principal = () => {
    const [selection, setSelection] = useState(null);
    const [title, setTitle] = useState("Solicitudes");
    const [formPage, setFormPage] = useState(1);
    const [cantPages, setCantPages] = useState(2);
    
    const { handleNavRefreshTo } = useCustomNav();

    function customSetSelection(number) {
        setSelection(number);
    }

    const handleNextPage = () => {
        setFormPage(formPage + 1);
        console.log(formPage);
    };

    const navigate = useNavigate();

    const handleSendData = () => {

    }

    useEffect(() => {
        if (selection == 1) setTitle("Accesorios y Consumibles");
        if (selection == 2) setTitle("Mantenimiento correctivo");
        if (selection == 3) setTitle("Capacitacion");
    }, [selection]);

    return (
        <>
            <div className="contenedor">
                <div className="encabezado">
                    <h1 className="title">{title}</h1>
                    {selection ? (
                        <MainBox
                            selectedOption={selection}
                            page={formPage}
                            setCantPages={setCantPages}
                        />
                    ) : (
                        <BoxContainer
                            selection={selection}
                            setSelection={customSetSelection}
                        />
                    )}
                </div>
            </div>

            <div className={"buttons-container"}>
                <div className="button-container">
                    <SOSButton />
                </div>

                {selection ? (
                    <div className="button-container">
                        <Button
                            label={"Cancelar"}
                            onClick={() => {
                                setSelection(null);
                            }}
                            style={{
                                backgroundColor: "black",
                                margin: "auto",
                                marginTop: "20px",
                                borderRadius: "20px",
                                width: "10rem",
                            }}
                        />
                    </div>
                ) : (
                    selection
                )}

                {formPage > 1 && (
                    <div className="button-container">
                        <Button
                            label={"Atrás"}
                            style={{
                                backgroundColor: "#244CDB",
                                margin: "auto",
                                marginTop: "20px",
                                borderRadius: "20px",
                                width: "10rem",
                            }}
                            onClick={() => {
                                setFormPage(formPage - 1);
                            }}
                        />
                    </div>
                )}

                {formPage === cantPages ? (
                    <div className="button-container">
                        <Button
                            label={"Enviar"}
                            style={{
                                backgroundColor: "green",
                                margin: "auto",
                                marginTop: "20px",
                                borderRadius: "20px",
                                width: "10rem",
                            }}
                            onClick={() => handleNavRefreshTo('/main')}
                        />{" "}
                    </div>
                ) : (
                    <div className="button-container">
                        <Button
                            label={"Continuar"}
                            style={{
                                backgroundColor: "#244CDB",
                                margin: "auto",
                                marginTop: "20px",
                                borderRadius: "20px",
                                width: "10rem",
                            }}
                            onClick={handleNextPage}
                        />
                    </div>
                )}
                
            </div>
        </>
    );
};

import React from "react";
import "../styles/Dashboard-Home.css";
export default function DashboardBox({nombre, cantidad, styleSheet}) {
    return (
        <div className={`box ${styleSheet}`}>
            <i className="uil uil-file-graph"></i>
            <span className="text">{nombre}</span>
            <span className="number">{cantidad}</span>
        </div>

    )
}
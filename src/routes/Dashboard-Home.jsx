import "../styles/Dashboard-Home.css";
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import DashboardBox from "../components/DashboardBox.jsx";
import InventarioUsuarios from "../components/InventarioUsuarios.jsx";
import {Button} from "primereact/button";
import Reportes from "../components/Reportes.jsx";


export const Menu = () => {

    useEffect(()=>{
        (async() => {
            fetch('http://localhost:4000/usuarios')
                .then(r => r.json())
                .then(r => setUsers(r))
        })();
        (async() => {
            fetch('http://localhost:4000/reportes')
                .then(r => r.json())
                .then(r => setReports(r))
        })();
    }, [])

    const [reports, setReports] = useState([])
    const [users, setUsers] = useState([])
    const [children, setChildren] = useState(null)

    return (
        <div>
            <nav>
                <div className="logo-name">
                    <div className="logo-image">
                        <img src="../assets/biocare.ico" alt="" />
                    </div>
                    <span className="logo_name">BIOCARE</span>
                </div>
                <div className="menu-items">
                    <ul className="nav-links">
                        <li>
                            <Button style={{backgroundColor:"white", color:'grey', margin: "auto"}} onClick={()=>{setChildren(null)}}>
                                    <i className="uil uil-estate"></i>
                                    <span className="link-name">Dashboard</span>
                            </Button>
                        </li>
                        <li>
                            <Button style={{backgroundColor:"white", color:'grey', margin:"auto"}} onClick={()=>{setChildren(<InventarioUsuarios/>)}}>
                                    <i className="uil uil-user-square"></i>
                                    <span className="link-name">Usuarios</span>
                            </Button>
                        </li>
                        <li>
                            <Button style={{backgroundColor:"white", color:'grey', margin: "auto"}} onClick={()=>{setChildren(<Reportes/>)}}>
                                <i className="uil uil-notes"></i>
                                <span className="link-name">Reportes</span>
                            </Button>
                        </li>
                        <li>
                            <Link to="/registrar-equipo">
                                    <i className="uil uil-monitor-heart-rate"></i>
                                    <span className="link-name">Equipos Médicos</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="logout-mod">
                        <li>
                            <Link to="/">
                                <i className="uil uil-signout"></i>
                                <span className="link-name">Salir</span>
                            </Link>
                        </li>
                        <li className="mode-toggle">
                            <a href="#">
                                <i className="uil uil-moon"></i>
                                <span className="link-name">Dark Mode</span>
                            </a>
                            <div className="mode-toggle">
                                <span className="switch"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="dashboard">
                <div className="top">
                    <i className="uil uil-bars sidebar-toggle"></i>
                    <div className="search-box">
                        <i className="uil uil-search"></i>
                        <input type="text" placeholder="Buscar..." />
                    </div>

                    <img src="../assets/BiocareBB.ico" alt="logo de clinica" />
                </div>
                <div className="dash-content">
                    <div className="overview">
                        <div className="title">
                            <i className="uil uil-tachometer-fast-alt"></i>
                            <span className="text">Panel de Control</span>
                        </div>
                        <div className="boxes">
                            <DashboardBox nombre={'Reportes'} cantidad={reports.length} styleSheet={'box1'}/>
                            <DashboardBox nombre={'Usuarios'} cantidad={users.length} styleSheet={'box2'}/>
                        </div>
                    </div>
                </div>
                {children}
            </section>
        </div>
    );
};
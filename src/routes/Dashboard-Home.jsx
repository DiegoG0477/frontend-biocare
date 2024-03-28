import {useEffect, useState} from "react";
import "../styles/Dashboard-Home.css";
import { Link } from 'react-router-dom';
import { getUsers } from "../services/api/usersService.js";
import { getAllMedEquipment } from "../services/api/medEquipmentService.js";
import { getReports } from "../services/api/reportService.js";
import DashboardBox from "../components/DashboardBox.jsx";
import InventarioUsuarios from "../components/InventarioUsuarios.jsx";
import EquiposMed from "../components/EquiposMed.jsx";
import {Button} from "primereact/button";
import Reportes from "../components/Reportes.jsx";


export const Menu = () => {
    const [reports, setReports] = useState([]);
    const [users, setUsers] = useState([]);
    const [medicalEquipment, setMedicalEquipment] = useState([]);
    const [children, setChildren] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            const userData = await getUsers();
            setUsers(userData);

            const medEquipmentData = await getAllMedEquipment();
            setMedicalEquipment(medEquipmentData);

            const reportsData = await getReports();
            setReports(reportsData);
        }

        fetchData();
    }, [])

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
                            <Button style={{backgroundColor:"white", color:'grey', margin:"auto"}} onClick={()=>{setChildren(<InventarioUsuarios users={users}/>)}}>
                                    <i className="uil uil-user-square"></i>
                                    <span className="link-name">Usuarios</span>
                            </Button>
                        </li>
                        <li>
                            <Button style={{backgroundColor:"white", color:'grey', margin: "auto"}} onClick={()=>{setChildren(<Reportes reports={reports}/>)}}>
                                <i className="uil uil-notes"></i>
                                <span className="link-name">Reportes</span>
                            </Button>
                        </li>
                        <li>
                            <Button style={{backgroundColor:"white", color:'grey', margin: "auto"}} onClick={()=>{setChildren(<EquiposMed medEquipments={medicalEquipment}/>)}}>
                                <i className="uil uil-monitor-heart-rate"></i>
                                <span className="link-name">Equipos Médicos</span>
                            </Button>
                        </li>
                        <li>
                            <Link to="/registrar-equipo">
                                    <i className="uil uil-monitor-heart-rate"></i>
                                    <span className="link-name">Registrar Equipo</span>
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
                            <DashboardBox nombre={'Reportes'} cantidad={reports.length} styleSheet={'box1'} uiIcon='uil uil-file-graph'/>
                            <DashboardBox nombre={'Usuarios'} cantidad={users.length} styleSheet={'box2'} uiIcon='uil uil-users-alt'/>
                            <DashboardBox nombre={'Equipos'} cantidad={medicalEquipment.length} styleSheet={'box3'} uiIcon='uil uil-monitor-heart-rate'/>
                        </div>
                    </div>
                </div>
                {children}
            </section>
        </div>
    );
};
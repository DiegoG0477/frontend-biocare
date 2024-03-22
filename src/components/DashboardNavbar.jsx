import {Link, NavLink} from "react-router-dom"
import "../styles/navbar.css"

export default function DashboardNavbar() {
    return (
        <div style={{backgroundColor: '#1D3557', height: '8rem', padding: '20px'}}>
            <NavLink id={'navbar'} style={{justifyContent:'space-around'}}>
                <Link style={{textDecoration:'none', color:'white'}} to="/dashboard">Home</Link>
                <Link style={{textDecoration:'none', color:'white'}} to="/reportes">Solicitudes</Link>
                <Link style={{textDecoration:'none', color:'white'}} to="/usuarios">Usuarios</Link>
                <Link style={{textDecoration:'none', color:'white'}} to="/ayuda">Ayuda</Link>
                <Link color={'white'} style={{textDecoration:'none'}} className={'nav-link'} to="/">Salir</Link>
            </NavLink>
        </div>
    )
}
import {Link, NavLink} from "react-router-dom"
import "../styles/navbar.css"
import logo from '../assets/biocare.ico'

export default function Navbar() {
    return (
        <div style={{backgroundColor: 'darkblue', height: '8rem', padding: '20px'}}>
            <div id={'navbar-logo'}>
                <img id={'logo'} src={logo} alt="logo de clinica"/>
            </div>
            <NavLink id={'navbar'} style={{justifyContent:'space-around'}}>
                <Link style={{textDecoration:'none', color:'white'}} to="/main">Home</Link>
                <Link style={{textDecoration:'none', color:'white'}} to="/ayuda">Ayuda</Link>
                <Link color={'white'} style={{textDecoration:'none'}} className={'nav-link'} to="/">Salir</Link>
            </NavLink>
        </div>
    )
}
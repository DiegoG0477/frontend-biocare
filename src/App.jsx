import { Routes, Route } from 'react-router-dom';
import { Menu } from './routes/Dashboard-Home.jsx';
import { Principal } from './routes/Preguntas/Principal.jsx';
import ProtectedRoute from './services/auth/ProtectedRoute.jsx';
import Home from './layout/Home.jsx';
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import ForgottenPasswordForm from "./components/ForgottenPasswordForm.jsx";
import EquiposMedicosForm from "./components/EquiposMedicosForm.jsx";
import Ayuda from "./components/Ayuda.jsx";
import Emergencia from "./components/Emergencia.jsx";
import DefaultLayout from "./layout/Default.layout.jsx";
import InventarioUsuarios from "./components/InventarioUsuarios.jsx";
import Reportes from "./components/Reportes.jsx";
import './styles/main.css';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home><LoginForm/></Home>}/>
            <Route path='/registrar' element={<Home><RegisterForm/></Home>} />
            <Route path='/recuperar-password' element={<Home> <ForgottenPasswordForm/> </Home>} />
            
            <Route element={<ProtectedRoute pagePermission="admin" />}>
                {/*ADMIN ROUTES*/}
                <Route path='/dashboard' element={<Menu />} />
                <Route path='/users' element={<InventarioUsuarios />} />
                <Route path='/registrar-equipo' element={<Home> <EquiposMedicosForm/> </Home>} />
                {/*<Route path='/equipos' element={<InventarioEquipos />} />*/}
                <Route path='/reportes' element={<Reportes />} />
            </Route>


            <Route element={<ProtectedRoute pagePermission="user" />}>
                {/*USER ROUTES*/}
                <Route path={'/main'} element={<DefaultLayout> <Principal/>  </DefaultLayout>}/>
                <Route path={'/ayuda'} element={<Ayuda />}/>
                <Route path={'/sos'} element={<Emergencia />}/>
            </Route>

            
        </Routes>
    )
}

export default App




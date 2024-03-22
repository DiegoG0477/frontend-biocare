import "../styles/main-layout.css"
import Navbar from "../components/Navbar.jsx";

export default function  DefaultLayout({children}) {
    return (
        <>
            <Navbar/>
            <div className={'main-layout'}>
                {children}
            </div>

        </>

    )
}
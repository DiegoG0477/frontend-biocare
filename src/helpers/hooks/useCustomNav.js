import { useNavigate } from "react-router-dom";

const useCustomNav = () =>{
    const navigation = useNavigate();

    const handleBackNav = () => {
        navigation(-1);
    }

    const handleNavTo = (route) => {
        navigation(route);
    }

    const handleNavRefreshTo = (route) => {
        window.location.href = route;
        // window.location.reload();
    }

    return { handleBackNav, handleNavTo, handleNavRefreshTo };
}

export default useCustomNav;
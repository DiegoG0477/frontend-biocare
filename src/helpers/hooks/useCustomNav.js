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

    const handleNewTabTo = (route) => {
        window.open(route, '_blank');
    }

    return { handleBackNav, handleNavTo, handleNavRefreshTo, handleNewTabTo };
}

export default useCustomNav;
import { useEffect, useState } from "react";
import useCustomNav from "../../helpers/hooks/useCustomNav";
import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom";
import { jwtVerify } from "jose";
import { getToken, getItem, clearStorage } from "../storage/localStorageService";

const ProtectedRoute = ({ children, pagePermission }) => {
    const { handleNavRefreshTo } = useCustomNav();
    const [isAllowed, setIsAllowed] = useState(false);

    const verifyToken = async () => {
        const tokenObj = getToken({ data: true });
        const roleCode =  getItem("role_session");
        const secretJWT = import.meta.env.VITE_SECRET_JWT || "secret";

        if(!tokenObj){
            clearStorage();
            handleNavRefreshTo("/");
            return;
        }

        if (new Date().getTime() > tokenObj.expiry) {
            clearStorage();
            handleNavRefreshTo("/");
            return;
        }

        const roleObj = await jwtVerify(
            roleCode,
            new TextEncoder().encode(secretJWT)
        );

        const role = roleObj.payload.user.role;

        const allowedRoles = {
            "admin": ["admin","user"],
            "user": ["user"],
        };

        if (allowedRoles[role].includes(pagePermission)) {
            console.log("allowed success");
            setIsAllowed(true);
        } else {
            setIsAllowed(false);

            if (pagePermission === "admin" && role === "user") {
                handleNavRefreshTo("/main");
            }
        }
    };

    useEffect(() => {
        verifyToken();
    }, []);

    return isAllowed ? (children || <Outlet />) : null;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node,
    pagePermission: PropTypes.string.isRequired
};

export default ProtectedRoute;
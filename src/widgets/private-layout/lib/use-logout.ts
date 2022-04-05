import {useAuthorization} from "features/authorization";
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {PUBLIC_PATH} from "shared/config";

export const useLogout = () => {
    const {setIsAuthorized} = useAuthorization()
    const navigate = useNavigate()

    const handleLogout = useCallback(() => {
        setIsAuthorized(false)
        localStorage.clear()
        navigate(PUBLIC_PATH.LOGIN)
    }, [setIsAuthorized])

    return {handleLogout}
}
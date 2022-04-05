import {useAuthorization} from "features/authorization";
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";

export const useLogout = () => {
    const {setIsAuthorized} = useAuthorization()
    const navigate = useNavigate()

    const handleLogout = useCallback(() => {
        setIsAuthorized(false)
        localStorage.clear()
        navigate('/login')
    }, [setIsAuthorized])

    return {handleLogout}
}
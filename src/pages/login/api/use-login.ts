import {useCallback} from "react";
import {notification} from "antd";

import {useIsLoading} from "features/helpers/lib";
import {loginUser} from "entities/users/api";
import {updateTokens, useAuthorization} from "features/authorization";
import {useNavigate} from "react-router-dom";
import {PRIVATE_PATH} from "shared/config";

export const useLogin = () => {
    const {startLoading, finishLoading, isLoading} = useIsLoading()
    const {setIsAuthorized} = useAuthorization()
    const navigate = useNavigate()

    const handleLogin = useCallback(async (params: Parameters<typeof loginUser>['0']) => {
        try {
            startLoading()
            const {data} = await loginUser(params)
            updateTokens({access: data.token})
            setIsAuthorized(true)
            navigate(PRIVATE_PATH.TASKS)
        } catch (error) {
            finishLoading()
            notification.error({
                message: "Ошибка входа",
                description: "Неверный логин или пароль"
            })

        }
    }, [finishLoading, finishLoading, setIsAuthorized])


    return {handleLogin, isLoading}
}
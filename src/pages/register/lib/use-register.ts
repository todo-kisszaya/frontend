import {useCallback} from "react";
import {notification} from "antd";

import {useIsLoading} from "features/helpers/lib";
import {registerUser} from "entities/users/api";
import {updateTokens, useAuthorization} from "features/authorization";
import {PRIVATE_PATH} from "shared/config";
import {useNavigate} from "react-router-dom";

export const useRegister = () => {
    const {finishLoading, startLoading, isLoading} = useIsLoading()
    const {setIsAuthorized} = useAuthorization()
    const navigate = useNavigate()

    const handleRegister = useCallback(async (values: Parameters<typeof registerUser>['0']) => {
        try {
            startLoading()
            const {data} = await registerUser(values)
            updateTokens({access: data.token})
            setIsAuthorized(true)
            navigate(PRIVATE_PATH.TASKS)
        } catch (error) {
            console.log(error)
            finishLoading()
            notification.error({
                message: "Ошибка регистрации",
                description: "Попробуйте еще раз!"
            })
        }
    }, [])

    return {isLoading, handleRegister}
}
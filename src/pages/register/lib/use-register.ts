import {useCallback} from "react";
import {notification} from "antd";

import {useIsLoading} from "features/helpers/lib";
import {registerUser} from "entities/users/api";
import {updateTokens, useAuthorization} from "features/authorization";

export const useRegister = () => {
    const {finishLoading, startLoading, isLoading} = useIsLoading()
    const {setIsAuthorized} = useAuthorization()

    const handleRegister = useCallback(async (values: Parameters<typeof registerUser>['0']) => {
        try {
            startLoading()
            const {data} = await registerUser(values)
            updateTokens({access: data.token})
            setIsAuthorized(true)
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
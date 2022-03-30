import {useCallback} from "react";
import {notification} from "antd";

import {useIsLoading} from "features/helpers/lib";
import {registerUser} from "entities/users/api";

export const useRegister = () => {
    const {finishLoading, startLoading, isLoading} = useIsLoading()

    const handleRegister = useCallback(async (values: Parameters<typeof registerUser>['0']) => {
        try {
            startLoading()
            const {data} = await registerUser(values)
            //updateTokens({access: data.token})
            //setIsAuthorized(true)
            console.log('data', data)
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
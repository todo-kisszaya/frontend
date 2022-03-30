import {useCallback} from "react";

import {useIsLoading} from "features/helpers/lib";
import {loginUser} from "entities/users/api";
import {useAuthorization} from "features/authorization";

export const useLogin = () => {
    const {startLoading, finishLoading, isLoading} = useIsLoading()
    const {setIsAuthorized} = useAuthorization()

    const handleLogin = useCallback(async (params: Parameters<typeof loginUser>['0']) => {
        try {
            startLoading()
            const {data} = await loginUser(params)
            console.log('data', data)
            //setIsAuthorized(true)
        } catch (error) {
            finishLoading()
            console.log('error', error)

        }
    }, [finishLoading, finishLoading, setIsAuthorized])


    return { handleLogin, isLoading }
}
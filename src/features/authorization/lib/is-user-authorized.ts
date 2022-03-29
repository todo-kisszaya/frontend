import {updateTokens} from "./update-tokens";
import {routes, api} from 'shared/api'

export const isUserAuthorized = async () => {
    const access = localStorage.getItem('access')

    if (!access) {
        return false
    }

    try {
        const {data} = await api.post(routes.token, {access})
        updateTokens(data)

        return true
    } catch (error: any) {
        if (error?.response?.status !== 404) {
            throw new Error(error)
        }
        localStorage.clear()
        return false
    }
}
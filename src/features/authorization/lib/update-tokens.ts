import {api} from 'shared/api'

interface Params {
    access: string,
}

export const updateTokens = ({access}: Params) => {
    localStorage.setItem('access', access)
    api.defaults.headers.common.Authorization = `Bearer ${access}`
}
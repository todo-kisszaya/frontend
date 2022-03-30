import useSWR from 'swr'

import {api, routes} from 'shared/api'
import * as types from "./types";

export const loginUser = (values: types.LoginRequest) => (
    api.post<types.LoginResponse>(routes.login, values)
)

export const registerUser = (values: types.RegisterRequest) => (
    api.post<types.RegisterResponse>(routes.register, values)
)

export const checkToken = (values: types.TokenRequest) => (
    api.post<types.TokenResponse>(routes.token, values)
)
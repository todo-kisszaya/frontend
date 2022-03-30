// Requests

export interface LoginRequest {
    email: string,
    password: string
}

export interface RegisterRequest {
    email: string,
    password: string
}

export interface TokenRequest {
    access: string
}

// Responses

export interface LoginResponse {
    user: {
        email: string
    },
    token: string
}

export interface RegisterResponse {
    user: {
        email: string
    },
    token: string
}

export interface TokenResponse {
    access: string
}
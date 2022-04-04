type Id = string | number

export const routes = {
    token: '/token',

    login: '/auth/login',
    register: '/auth/register',

    tasks: '/tasks',
    task: (id: Id) => `/tasks/${id}`
}
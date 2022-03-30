import {useLogin} from "./api/use-login";

export const Login = () => {
    const {handleLogin, isLoading} = useLogin()

    return <div>
        <h1>
            Login
            <button onClick={() => handleLogin({
                email: 'sveta@mail.ru',
                password: '123456'
            })}>
                Meow
            </button>
        </h1>
    </div>
}
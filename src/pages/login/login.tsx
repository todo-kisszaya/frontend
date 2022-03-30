import {useLogin} from "./api/use-login";
import {Typography, Form, Input, Button} from 'antd'
import {Link} from 'react-router-dom'
import {PUBLIC_PATH} from "shared/config";


export const Login = () => {
    const {handleLogin, isLoading} = useLogin()

    return <div>
        <Typography.Title level={2}>
            Вход
        </Typography.Title>
        <Form onFinish={handleLogin} layout='vertical'>
            <Form.Item name='email' rules={[{required: true, message: 'Пожалуйста введите почту!'}]}>
                <Input placeholder='Почта'/>
            </Form.Item>
            <Form.Item name='password' rules={[{required: true, message: 'Пожалуйста введите пароль!'}]}>
                <Input placeholder='Пароль'
                       type='password'/>
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' loading={isLoading} type='primary'>
                    Отправить
                </Button>
            </Form.Item>
            <Form.Item>
                <Link to={PUBLIC_PATH.REGISTER}>
                    <Button block>
                        Еще нет аккаунта
                    </Button>
                </Link>
            </Form.Item>
        </Form>
    </div>
}
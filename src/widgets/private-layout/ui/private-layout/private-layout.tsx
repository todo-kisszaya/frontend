import {ReactNode} from "react";

import styles from './private-layout.module.scss'
import {Button, Layout, Menu} from "antd";
import {useLogout} from "../../lib/use-logout";

const {Header, Content} = Layout


interface Props {
    children: ReactNode
}

export const PrivateLayout = ({children}: Props) => {
    const {handleLogout} = useLogout()

    return <Layout className={styles.layout}>
        <Header className={styles.header}>
            <Menu theme='dark' mode='horizontal'>
                <Button onClick={handleLogout}>
                    Выйти из аккаунта
                </Button>
            </Menu>
        </Header>
        <Content className={styles.content}>
            {children}
        </Content>
    </Layout>
}
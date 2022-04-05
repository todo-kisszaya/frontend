import {ReactNode} from "react";
import styles from './public-layout.module.scss'

import {Layout} from "antd";

const {Content} = Layout

interface Props {
    children: ReactNode
}

export const PublicLayout = ({children}: Props) => {

    return (
        <Layout className={styles.layout}>
            <Content className={styles.content}>
                {
                    children
                }
            </Content>
        </Layout>
    )
}
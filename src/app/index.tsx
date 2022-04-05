import './index.css';
import {useAuthorization} from "features/authorization";

import {privateRoutes, publicRoutes} from "./lib/routes";
import {Routing} from "features/routing";
import {PrivateLayout} from "widgets/private-layout";

export const App = () => {
    const {isAuthorized} = useAuthorization()

    return isAuthorized ? (
        <PrivateLayout>
            <Routing routes={privateRoutes}/>
        </PrivateLayout>
    ) : (
        <Routing routes={publicRoutes}/>
    )
}
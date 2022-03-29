import './index.css';
import {useAuthorization} from "features/authorization";

import {privateRoutes, publicRoutes} from "./lib/routes";
import {Routing} from "features/routing";

export const App = () => {
    const {isAuthorized} = useAuthorization()

    return isAuthorized ? (
        <Routing routes={privateRoutes}/>
    ) : (
        <Routing routes={publicRoutes}/>
    )
}
import './index.css';
import {useAuthorization} from "features/authorization";

import {privateRoutes, publicRoutes} from "./lib/routes";
import {Routing} from "features/routing";
import {PrivateLayout} from "widgets/private-layout";
import {PublicLayout} from "../widgets/public-layout";

export const App = () => {
    const {isAuthorized} = useAuthorization()

    return isAuthorized ? (
        <PrivateLayout>
            <Routing routes={privateRoutes}/>
        </PrivateLayout>
    ) : (
        <PublicLayout>
            <Routing routes={publicRoutes}/>
        </PublicLayout>
    )
}
import {ClassicComponent, FunctionComponent} from "react";
import {Routes, Route} from "react-router-dom";

export type Routes = {
    path?: string,
    element: FunctionComponent | ClassicComponent,
    default?: boolean
}[]

interface Props {
    routes: Routes
}

export const Routing = ({routes}: Props) => {
    const defaultPath = routes.find((route) => route.default)?.path

    return (<Routes>
        {
            routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element}/>
            ))
        }
    </Routes>)

}
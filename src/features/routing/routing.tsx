import {ComponentClass, FunctionComponent} from "react";
import {Routes, Route, Navigate} from "react-router-dom";

export type Routes = {
    path?: string,
    element: FunctionComponent | ComponentClass,
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
                <Route key={route.path} path={route.path} element={<route.element/>}/>
            ))
        }
        {defaultPath && <Route path='/' element={<Navigate to={defaultPath}/>}/>}
        <Route path='*' element={<h1>Not found</h1>}/>
    </Routes>)
}
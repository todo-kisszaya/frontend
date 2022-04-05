import {Routes} from "features/routing/routing";
import * as pages from 'pages';
import {PRIVATE_PATH, PUBLIC_PATH} from 'shared/config'

export const publicRoutes: Routes = [
    {path: PUBLIC_PATH.LOGIN, element: pages.Login, default: true},
    {path: PUBLIC_PATH.REGISTER, element: pages.Register}
]

export const privateRoutes: Routes = [
    {path: PRIVATE_PATH.TASKS, element: pages.Tasks, default: true},
    {path: PRIVATE_PATH.TASK, element: pages.TaskDetails}
]


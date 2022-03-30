import useSWR from 'swr'

import {api, routes} from 'shared/api'
import * as types from "./types";

export const createTask = (values: types.CreateTaskRequest) => (
    api.post<types.CreateTaskResponse>(routes.tasks, values)
)

import useSWR from 'swr'

import {api, routes} from 'shared/api'
import * as types from "./types";

type Id = number | string

export const createTask = (values: types.CreateTaskRequest) => (
    api.post<types.CreateTaskResponse>(routes.tasks, values)
)

export const useTasks = () => {
    const {data: tasks} = useSWR<types.GetAllTasksResponse>(routes.tasks)
    return {tasks}
}

export const useTask = (id: Id) => {
    const {data: task} = useSWR<types.GetTaskResponse>(routes.task(id))
    return {task}
}

export const updateTask = (id: Id, values: types.UpdateTaskRequest) => (
    api.patch<types.UpdateTaskResponse>(routes.task(id), values)
)

export const deleteTask = (id: Id) => (
    api.delete<types.DeleteTaskResponse>(routes.task(id))
)

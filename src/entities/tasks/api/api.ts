import useSWR from 'swr'

import {api, routes} from 'shared/api'
import * as types from "./types";
import {AxiosRequestConfig} from 'axios';

type Id = number | string

type TasksList = types.GetAllTasksResponse
export const useTasks = (params?: unknown) => {
    const {data: tasks} = useSWR<TasksList>([
        routes.tasks,
        {params} as AxiosRequestConfig<TasksList>,
    ])
    return {tasks}
}


export const createTask = (values: types.CreateTaskRequest) => (
    api.post<types.CreateTaskResponse>(routes.tasks, values)
)

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

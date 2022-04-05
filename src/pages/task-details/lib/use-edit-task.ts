import {useCallback} from "react";
import {updateTask} from "entities/tasks/api";
import {mutate} from 'swr'
import {routes} from "shared/api";
import {UpdateTaskRequest} from "entities/tasks/api/types";

export const useEditTask = (taskId: string | number) => {
    const handleEditTask = useCallback(async (values: UpdateTaskRequest) => {
        const {data} = await updateTask(taskId, values)
        await mutate(routes.task(taskId), data.task)
    }, [taskId])

    return {handleEditTask}
}
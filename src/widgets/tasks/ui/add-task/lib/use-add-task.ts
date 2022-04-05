import {useCallback} from "react";
import {CreateTaskRequest} from "entities/tasks/api/types";
import {createTask} from "entities/tasks/api";
import {mutate} from "swr";
import {routes} from "shared/api";


export const useAddTask = () => {

    const handleAddTask = useCallback(async (values: CreateTaskRequest) => {
        const {data} = await createTask(values)
        await mutate(routes.tasks)
    }, [])

    return {handleAddTask}
}
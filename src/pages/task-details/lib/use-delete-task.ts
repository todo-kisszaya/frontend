import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import {deleteTask} from "entities/tasks/api";
import {notification} from "antd";
import {mutate} from 'swr'
import {PRIVATE_PATH} from "shared/config";
import {routes} from "shared/api";

export const useDeleteTask = (taskId: string | number) => {
    const navigate = useNavigate()

    const handleDeleteTask = useCallback(async () => {
        await deleteTask(taskId)
        notification.warning({message: "Задача удалена"})
        navigate(PRIVATE_PATH.TASKS)
        await mutate(routes.tasks)
    }, [taskId])

    return {handleDeleteTask}
}
import {useParams} from "react-router";
import {useTask} from "entities/tasks/api";

export const TaskDetails = () => {
    let {taskId} = useParams<{ taskId: string }>()
    const {task} = useTask(taskId as string)


    return <div>
        {
            taskId
        }
    </div>
}
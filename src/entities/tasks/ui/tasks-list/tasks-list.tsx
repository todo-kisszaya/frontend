import {GetAllTasksResponse} from "entities/tasks/api/types";

interface Props {
    tasks: GetAllTasksResponse | undefined
}

export const TasksList = ({tasks}: Props) => {
    return <div>
        Meow
    </div>
}
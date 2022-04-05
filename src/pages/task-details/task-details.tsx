import {useParams} from "react-router";
import {useTask} from "entities/tasks/api";
import {useDeleteTask, useEditTask} from "./lib";
import {useState} from "react";
import {TaskForm} from "widgets/tasks/ui";

export const TaskDetails = () => {
    let {taskId} = useParams<{ taskId: string }>()
    const id = taskId as string

    const {task} = useTask(id)
    const {handleDeleteTask} = useDeleteTask(id)
    const {handleEditTask} = useEditTask(id)

    const [isEditing, setIsEditing] = useState(false)

    return (
        <TaskForm isEditing={isEditing} setIsEditing={setIsEditing} values={task} onDelete={handleDeleteTask}
                  onSubmit={handleEditTask}/>
    )
}
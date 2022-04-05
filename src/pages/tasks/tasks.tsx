import {Typography} from "antd"
import {useTasks} from "entities/tasks/api"
import {Grid} from "shared/ui"
import {TasksList} from "entities/tasks/ui";
import {AddTask} from "widgets/tasks/ui";


export const Tasks = () => {
    const {tasks} = useTasks()

    return <Grid>
        <Typography.Title level={2}>Мои задачи</Typography.Title>
        <AddTask/>
        <TasksList tasks={tasks}/>
    </Grid>
}
import {Grid, Typography} from "antd"
import {useTasks} from "entities/tasks/api"

export const TasksList = () => {
    const {tasks} = useTasks()

    // return (<Grid>
    //     <Typography.Title level={2}>Мои задачи</Typography.Title>
    // </Grid>)

    return <div>
        meow
    </div>
}

// export default TasksList
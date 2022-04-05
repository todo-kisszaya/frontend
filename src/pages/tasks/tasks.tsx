import {Typography} from "antd"
import {useTasks} from "entities/tasks/api"
import {Grid} from "shared/ui"
import {TasksList} from "entities/tasks/ui";
import {AddTask} from "widgets/tasks/ui";
import {Filters, FiltersInterface} from "./ui/filters/filters";
import {useState} from "react";


export const Tasks = () => {
    const [filters, setFilters] = useState<FiltersInterface>({})
    const {tasks} = useTasks(filters)

    return <Grid>
        <Typography.Title level={2}>Мои задачи</Typography.Title>
        <AddTask/>
        <Filters filters={filters} setFilters={setFilters}/>
        <TasksList tasks={tasks}/>
    </Grid>
}
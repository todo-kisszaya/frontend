import {GetAllTasksResponse} from "entities/tasks/api/types";
import { Grid } from "shared/ui";

interface Props {
    tasks: GetAllTasksResponse | undefined
}

export const TasksList = ({tasks}: Props) => {
    return <Grid>
        meow
    </Grid>
}
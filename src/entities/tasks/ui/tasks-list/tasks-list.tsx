import {GetAllTasksResponse} from "entities/tasks/api/types";
import {Grid, LinkCard} from "shared/ui";
import {generatePath} from "react-router";
import {PRIVATE_PATH} from "shared/config";
import {Empty, Typography} from "antd";
import {CheckCircleFilled, CloseCircleFilled} from "@ant-design/icons";

interface Props {
    tasks: GetAllTasksResponse | undefined
}

export const TasksList = ({tasks}: Props) => {
    return <Grid>
        {
            !tasks || !!tasks.tasks.length ? (
                tasks?.tasks.map(task => (
                    <LinkCard key={task.task_id}
                              href={generatePath(PRIVATE_PATH.TASK, {taskId: task.task_id.toString()})}>
                        <Typography.Title level={4}>
                            {task.name}
                        </Typography.Title>
                        {
                            task.completed ? <CheckCircleFilled style={{color: "green"}}/> :
                                <CloseCircleFilled style={{color: "red"}}/>
                        }
                    </LinkCard>
                ))
            ) : (
                <Empty description="Пока что нет тасков"/>
            )
        }
    </Grid>
}
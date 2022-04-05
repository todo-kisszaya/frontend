import {Dispatch, SetStateAction, useCallback, useEffect} from "react";
import {GetTaskResponse, UpdateTaskRequest} from "entities/tasks/api/types";
import {Button, Form, Input, Switch, Typography} from "antd";
import {Grid} from "shared/ui";
import {EditOutlined} from "@ant-design/icons";
import styles from './task-form.module.scss'

interface Props {
    isEditing: boolean,
    setIsEditing: Dispatch<SetStateAction<boolean>>,
    values?: GetTaskResponse,
    onDelete: () => Promise<void> | void,
    onSubmit: (values: UpdateTaskRequest) => Promise<void> | void
}

export const TaskForm = ({onDelete, onSubmit, setIsEditing, isEditing, values}: Props) => {
    const [form] = Form.useForm()

    useEffect(() => {
        form.setFieldsValue(values?.task)
    }, [form, values])

    const handleSave = useCallback(async (values) => {
        await onSubmit(values)
        setIsEditing(false)
    }, [setIsEditing, onSubmit])


    return <Grid>
        <div className={styles.header}>
            {
                !isEditing && !!setIsEditing && (
                    <Button
                        icon={<EditOutlined onClick={() => setIsEditing(true)}/>}
                        size='middle'
                        type='primary'
                    />
                )
            }
        </div>
        {
            isEditing ? (
                <Form form={form} layout='vertical' onFinish={handleSave}>
                    <Form.Item name='name'>
                        <Input placeholder='Лабораторная работа'/>
                    </Form.Item>
                    <Form.Item name='completed' valuePropName='checked'>
                        <Switch/>
                    </Form.Item>
                    <Form.Item>
                        <Button block htmlType='submit' type='primary'>
                            Сохранить
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button block danger onClick={onDelete}>
                            Удалить
                        </Button>
                    </Form.Item>
                </Form>
            ) : (
                <div>
                    <Typography.Title>
                        {values?.task.name}
                    </Typography.Title>
                    <Typography.Paragraph>
                        {
                            values?.task.completed ? 'Завершен' : 'Не завершен'
                        }
                    </Typography.Paragraph>
                </div>
            )
        }
    </Grid>
}
import {useCallback} from "react";
import {Button, Form, Input} from "antd";
import {useAddTask} from "./lib/use-add-task";

export const AddTask = () => {
    const {handleAddTask} = useAddTask()
    const [form] = Form.useForm();

    const onSubmit = useCallback(async (values) => {
        await handleAddTask(values)
        form.resetFields()
    }, [handleAddTask])

    return <Form layout="inline" onFinish={onSubmit} form={form}>
        <Form.Item name='name' rules={[{required: true, message: 'Название задания не должно быть пустым'}]}>
            <Input/>
        </Form.Item>
        <Form.Item>
            <Button block htmlType='submit' type='primary'>
                Создать
            </Button>
        </Form.Item>
    </Form>
}
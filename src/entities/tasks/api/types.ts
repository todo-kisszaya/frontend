// Requests

export interface UpdateTaskRequest {
    name: string,
    completed: boolean
}

export interface CreateTaskRequest {
    name: string
}


// Responses
export interface GetAllTasksResponse {
    tasks: {
        task_id: number,
        name: string,
        completed: boolean,
        user_id: number,
        createdAt: string,
        updatedAt: string
    }[]
}

export interface GetTaskResponse {
    task: {
        task_id: number,
        name: string,
        completed: boolean,
        user_id: number,
        createdAt: string,
        updatedAt: string
    }
}

export interface DeleteTaskResponse {
    msg: string
}

export interface UpdateTaskResponse {
    task: {
        task_id: number,
        name: string,
        completed: boolean,
        user_id: number,
        createdAt: string,
        updatedAt: string
    }
}

export interface CreateTaskResponse {
    task: {
        task_id: number,
        name: string,
        completed: boolean,
        user_id: number,
        createdAt: string,
        updatedAt: string
    }
}


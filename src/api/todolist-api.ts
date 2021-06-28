import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '26cd6eda-bc62-4bf5-b3d8-fb025b33cde9'
    }
})

type TodoType = {
    id: string
    title: string
    addedDate: string
    order: number
}

type CommonResponseType<T = {}> = {
    resultCode: number
    fieldsErrors: string[]
    messages: string[]
    data: T
}

export const todolistApi = {
    getTodos() {
        return instance.get<TodoType[]>('todo-lists')
    },
    createTodo() {
        return instance.post<CommonResponseType<{item: TodoType}>>('todo-lists', {title: 'New todoList'})
    },
    deleteTodo(TodoListID: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${TodoListID}`)
    },
    updateTodo(TodoListID: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${TodoListID}`, {title})
    }
}
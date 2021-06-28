import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {todolistApi} from '../api/todolist-api';

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodos().then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTodo().then( (res) => {
            setState(res.data)
        } )
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const TodoListID = 'b2f81e06-2a39-4843-a760-fdbaad20bb52'
        todolistApi.deleteTodo(TodoListID).then( (res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const TodoListID= '726b6223-51c0-4335-9a69-0cbce6f205a7'
        const title = 'AXIOS'
        todolistApi.updateTodo(TodoListID, title).then( (res) => {
            setState(res.data)
        })
    }, [])


    return <div> {JSON.stringify(state)}</div>
}

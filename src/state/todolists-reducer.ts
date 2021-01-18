import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';

// action:

export type RemoveTodolistActionType = {
    type: "REMOVE-TODOLIST",
    id: string
}
export type AddTodolistActionType = {
    type: "ADD-TODOLIST",
    title: string
    todolistID: string
}
export type ChangeTodolistTitleActionType = {
    type: "CHANGE-TODOLIST-TITLE",
    title: string
    id: string
}
export type ChangeTodolistFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER",
    filter: FilterValuesType
    id: string
}

type ActionType = RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType

const initialState: Array<TodolistType> = []

export const todoListsReducer = (state: Array<TodolistType> = initialState, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            let newTodolist: TodolistType = {
                id: action.todolistID,
                title: action.title,
                filter: 'all'
            }
            return [...state, newTodolist]
        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.title = action.title;
                return [...state]
            }
            return state
        }
        case 'CHANGE-TODOLIST-FILTER': {
            const todolist = state.find(tl => tl.id === action.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.filter = action.filter;
                return [...state]
            }
            return state
        }
        default:
            return state
    }
}

export const removeTodoListAC = (todoListID: string): RemoveTodolistActionType => (
    {type: 'REMOVE-TODOLIST', id: todoListID}
)

export const addTodoListAC = (title: string): AddTodolistActionType => (
    {type: 'ADD-TODOLIST', title: title, todolistID: v1()}
)

export const changeTodolistTitleAC = (title: string, id: string): ChangeTodolistTitleActionType => (
    {type: 'CHANGE-TODOLIST-TITLE', id: id, title: title}
)

export const changeTodolistFilterAC = (filter: FilterValuesType, id: string): ChangeTodolistFilterActionType => (
    {type: 'CHANGE-TODOLIST-FILTER', filter: filter, id: id}
)
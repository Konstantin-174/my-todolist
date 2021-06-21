import {
    AddTodolistActionType, ChangeTodolistFilterActionType, ChangeTodolistTitleActionType,
    FilterValuesType,
    RemoveTodolistActionType,
    TodolistsActionType,
    TodolistType
} from '../types';
import {v1} from 'uuid';

const initialState: Array<TodolistType> = []

export const todoListsReducer = (state: Array<TodolistType> = initialState, action: TodolistsActionType) => {
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
            return state.map(tl => tl.id === action.id ? {...tl, title: action.title} : tl)
            // const todolist = state.find(tl => tl.id === action.id);
            // if (todolist) {
            //     // если нашёлся - изменим ему заголовок
            //     todolist.title = action.title;
            //     return [...state]
            // }
            // return state
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)
            // const todolist = state.find(tl => tl.id === action.id);
            // if (todolist) {
            //     // если нашёлся - изменим ему заголовок
            //     todolist.filter = action.filter;
            //     return [...state]
            // }
            // return state
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
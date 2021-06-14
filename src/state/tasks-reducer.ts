import {
    AddTaskActionType,
    ChangeTaskStatusActionType, ChangeTaskTitleActionType,
    RemoveTaskActionType, TasksActionType,
    TasksStateType,
    TaskType
} from '../types';
import {v1} from 'uuid';

const initialState: TasksStateType = {}

export const tasksReducer = (state: TasksStateType = initialState, action: TasksActionType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let copyState = {...state}
            copyState[action.todolistID] = copyState[action.todolistID].filter(task => task.id !== action.taskID)
            return copyState
        }
        case 'ADD-TASK': {
            let copyState = {...state}
            let task: TaskType = {
                id: v1(),
                title: action.title,
                isDone: false
            }
            copyState[action.todolistID] = [task, ...copyState[action.todolistID]]
            return copyState
        }
        case 'CHANGE-TASK-STATUS': {
            return {...state,
            [action.todolistID]: state[action.todolistID]
                .map(t => {
                    if (t.id !== action.taskID) {
                        return {...t}
                    } else {
                        return {...t, isDone: action.isDone}
                    }
                })
            }
        }
        case 'CHANGE-TASK-TITLE': {
            return {...state,
                [action.todolistID]: state[action.todolistID]
                    .map(t => {
                        if (t.id === action.taskID) {
                            return {...t}
                        } else {
                            return {...t, title: action.newTitle}
                        }
                    })
            }
        }
        case "ADD-TODOLIST":
            return {
                ...state,
                [action.todolistID]: []
            }
        case "REMOVE-TODOLIST": {
            let copyState = {...state}
            delete copyState[action.id]
            return copyState
        }
        default:
            return state
    }
}

export const removeTaskAC = (taskID: string, todolistID: string): RemoveTaskActionType => (
    {type: 'REMOVE-TASK', taskID, todolistID}
)

export const addTaskAC = (title: string, todolistID: string): AddTaskActionType => (
    {type: 'ADD-TASK', title, todolistID}
)

export const changeTaskStatusAC = (taskID: string, isDone: boolean, todolistID: string): ChangeTaskStatusActionType => (
    {type: 'CHANGE-TASK-STATUS', taskID, isDone, todolistID}
)

export const changeTaskTitleAC = (taskID: string, newTitle: string, todolistID: string): ChangeTaskTitleActionType => (
    {type: 'CHANGE-TASK-TITLE', taskID, newTitle, todolistID}
)



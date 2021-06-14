import React, {useCallback} from 'react';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {IconButton, Button} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {TodolistPropsType} from './types';
import {Task} from './Task';

export const Todolist: React.FC<TodolistPropsType> = React.memo(({
                                                                     id,
                                                                     tasks,
                                                                     filter,
                                                                     title,
                                                                     changeFilter,
                                                                     addTask,
                                                                     removeTodolist,
                                                                     changeTodolistTitle,
                                                                     changeTaskTitle,
                                                                     removeTask,
                                                                     changeTaskStatus
                                                                 }) => {

    let tasksForTodolist = tasks

    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }

    const addTaskInto = useCallback((title: string) => {
        addTask(title, id)
    }, [addTask, id])

    const removeTodolistInto = useCallback(() => {
        removeTodolist(id)
    }, [removeTodolist, id])
    const changeTodolistTitleInto = useCallback((title: string) => {
        changeTodolistTitle(id, title)
    }, [changeTodolistTitle, id])

    const onAllClickHandler = useCallback(() => changeFilter('all', id), [changeFilter, id]);
    const onActiveClickHandler = useCallback(() => changeFilter('active', id), [changeFilter, id]);
    const onCompletedClickHandler = useCallback(() => changeFilter('completed', id), [changeFilter, id]);

    return <div>
        <h3>
            <EditableSpan value={title}
                          onChange={changeTodolistTitleInto}
            />
            <IconButton onClick={removeTodolistInto}>
                <Delete/>
            </IconButton>
            {/*<button onClick={removeTodolist}>x</button>*/}
        </h3>
        <AddItemForm addItem={addTaskInto}/>
        <ul style={{listStyle: 'none', paddingLeft: '0'}}>
            {
                tasksForTodolist.map(t => {
                    return <Task key={t.id}
                                 task={t}
                                 todolistID={id}
                                 removeTask={removeTask}
                                 changeTaskStatus={changeTaskStatus}
                                 changeTaskTitle={changeTaskTitle}
                    />
                })
            }
        </ul>
        <div>
            <Button size={'small'}
                    variant={filter === 'all' ? 'contained' : 'outlined'}
                    color={'primary'}
                // className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </Button>
            <Button size={'small'}
                    variant={filter === 'active' ? 'contained' : 'outlined'}
                    color={'primary'}
                // className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>ACTIVE
            </Button>
            <Button size={'small'}
                    variant={filter === 'completed' ? 'contained' : 'outlined'}
                    color={'primary'}
                // className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>COMPLETED
            </Button>
        </div>
    </div>
})



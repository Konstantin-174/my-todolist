import React, {ChangeEvent} from 'react';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {IconButton, Button, Checkbox} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {TodolistPropsType} from './types';

export function Todolist(props: TodolistPropsType) {
    const addTask = (title: string) => {
        props.addTask(title, props.id);
    }

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.id, title);
    }

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    return <div>
        <h3> <EditableSpan value={props.title} onChange={changeTodolistTitle} />
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
            {/*<button onClick={removeTodolist}>x</button>*/}
        </h3>
        <AddItemForm addItem={addTask}/>
        <ul style={{listStyle: "none", paddingLeft: "0"}}>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }
                    const onTitleChangeHandler = (newValue: string) => {
                        props.changeTaskTitle(t.id, newValue, props.id);
                    }


                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <Checkbox size={'small'}
                                  color={'primary'}
                                  onChange={onChangeHandler}
                                  checked={t.isDone}
                        />
                        {/*<input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>*/}
                        <EditableSpan value={t.title} onChange={onTitleChangeHandler} />
                        <IconButton onClick={onClickHandler}>
                            <Delete/>
                        </IconButton>
                        {/*<button onClick={onClickHandler}>x</button>*/}
                    </li>
                })
            }
        </ul>
        <div>
            <Button size={"small"}
                    variant={props.filter === 'all' ? "contained" : "outlined"}
                    color={"primary"}
                    // className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </Button>
            <Button size={"small"}
                    variant={props.filter === 'active' ? "contained" : "outlined"}
                    color={"primary"}
                    // className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>ACTIVE
            </Button>
            <Button size={"small"}
                    variant={props.filter === 'completed' ? "contained" : "outlined"}
                    color={"primary"}
                    // className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>COMPLETED
            </Button>
        </div>
    </div>
}



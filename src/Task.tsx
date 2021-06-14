import React, {ChangeEvent} from 'react';
import {Checkbox, IconButton} from '@material-ui/core';
import {EditableSpan} from './EditableSpan';
import {Delete} from '@material-ui/icons';
import {TaskPropsType} from './types';

export const Task: React.FC<TaskPropsType> = React.memo(({
                                                             removeTask,
                                                             task,
                                                             todolistID,
                                                             changeTaskStatus,
                                                             changeTaskTitle
                                                         }) => {

    const onClickHandler = () => removeTask(task.id, todolistID)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        changeTaskStatus(task.id, newIsDoneValue, todolistID);
    }
    const onTitleChangeHandler = (newValue: string) => {
        changeTaskTitle(task.id, newValue, todolistID)
    }

    return <div className={task.isDone ? 'is-done' : ''}>
        <Checkbox size={'small'}
                  color={'primary'}
                  onChange={onChangeHandler}
                  checked={task.isDone}
        />
        <EditableSpan value={task.title}
                      onChange={onTitleChangeHandler}
        />
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
})
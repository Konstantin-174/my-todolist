import React, {ChangeEvent, useState} from 'react';
import {TextField} from '@material-ui/core';
import {EditableSpanPropsType} from './types';

export const EditableSpan: React.FC<EditableSpanPropsType> = React.memo(({
                                                                             onChange,
                                                                             value
                                                                         }) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <TextField variant={'outlined'}
                     value={title}
                     onChange={changeTitle}
                     autoFocus
                     onBlur={activateViewMode}
        />
        // <input value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{value}</span>
})

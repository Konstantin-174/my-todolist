import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {IconButton, TextField} from '@material-ui/core';
import {AddBox} from '@material-ui/icons';
import {AddItemFormPropsType} from './types';


export const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    console.log("AddItemForm clicked")
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        {/*<input value={title}*/}
        {/*       onChange={onChangeHandler}*/}
        {/*       onKeyPress={onKeyPressHandler}*/}
        {/*       className={error ? "error" : ""}*/}
        {/*/>*/}
        <TextField
            variant={"outlined"}
            error={!!error}
            label={"Title"}
            helperText={error}
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
        />
        {/*<Button variant={"contained"} color="primary" onClick={addItem}>ADD*/}
        {/*</Button>*/}
        <IconButton onClick={addItem}>
            <AddBox/>
        </IconButton>
        {/*<button onClick={addItem}>+</button>*/}
        {/*{error && <div className="error-message">{error}</div>}*/}
    </div>
})

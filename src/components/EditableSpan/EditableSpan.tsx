import React, {ChangeEvent, useState} from 'react';
import {Text} from 'react-native';

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
    // console.log("EditableSpan called");
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ?    <Text>Input</Text>
        : <Text
            // onDoubleClick={activateEditMode}
        >{props.value}</Text>
});
// <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
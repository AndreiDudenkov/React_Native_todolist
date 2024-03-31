import React, {ChangeEvent, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {globalStyles} from '../../../global-styles';

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
    const changeTitle = (title: string) => {
        setTitle(title)
    }

    return editMode
        ? <View style={{flexDirection: 'row'}}>
            <TextInput
                style={[globalStyles.input, globalStyles.primaryColor]}
                onChangeText={changeTitle}
                value={title}
            />
            <View>
                <Ionicons name='checkmark' size={24} color='black' onPress={activateViewMode}/>
            </View>
        </View>
        :
        <Text
            style={[globalStyles.primaryColor, {fontSize: 18, fontWeight: '500'}] }
            onLongPress={activateEditMode}
        >{props.value}</Text>
});
// <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
const styles = StyleSheet.create({

})

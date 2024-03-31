import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {globalStyles} from '../../../global-styles';

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function ({addItem, disabled = false}: AddItemFormPropsType) {
    // console.log("AddItemForm called")

    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title);
            setTitle('');
        } else {
            setError('Title is required');
        }
    }

    const onChangeHandler = (title: string) => {
        setTitle(title)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItemHandler();
        }
    }

    return <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 4}]}>
        <TextInput
            style={[globalStyles.input, globalStyles.primaryColor]}
            onChangeText={onChangeHandler}
            value={title}
        />
        <View>
            <TouchableOpacity onPress={addItemHandler}>
                <Ionicons name='add' size={24} color={globalStyles.primaryColor.color} />
            </TouchableOpacity>
        </View>
        {/*<TextField variant="outlined"*/}
        {/*           disabled={disabled}*/}
        {/*           error={!!error}*/}
        {/*           value={title}*/}
        {/*           onChange={onChangeHandler}*/}
        {/*           onKeyPress={onKeyPressHandler}*/}
        {/*           label="Title"*/}
        {/*           helperText={error}*/}
        {/*/>*/}
        {/*<IconButton color="primary" onClick={addItemHandler} disabled={disabled}>*/}
        {/*    <AddBox />*/}
        {/*</IconButton>*/}
    </View>
})

const styles = StyleSheet.create({

})
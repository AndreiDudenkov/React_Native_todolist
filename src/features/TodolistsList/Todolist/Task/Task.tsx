import React, {ChangeEvent, useCallback} from 'react'
import {EditableSpan} from '../../../../components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '../../../../api/todolists-api'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Checkbox from 'expo-checkbox';
import {Ionicons} from '@expo/vector-icons';

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo((props: TaskPropsType) => {
    const onClickHandler = useCallback(() => props.removeTask(props.task.id, props.todolistId), [props.task.id, props.todolistId]);

    const onChangeHandler = useCallback((value: boolean) => {
        props.changeTaskStatus(props.task.id, value ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
    }, [props.task.id, props.todolistId]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    }, [props.task.id, props.todolistId]);

    return <View key={props.task.id}
                 style={ props.task.status === TaskStatuses.Completed? {...styles.task, opacity: 0.3} : {...styles.task}}>
        <Checkbox
            style={{marginRight: 12}}
            value={props.task.status === TaskStatuses.Completed}
            onValueChange={onChangeHandler}
        />
        {/*<Checkbox*/}
        {/*    checked={props.task.status === TaskStatuses.Completed}*/}
        {/*    color="primary"*/}
        {/*    onChange={onChangeHandler}*/}
        {/*/>*/}

        <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
        <TouchableOpacity style={{marginLeft: 25}} onPress={() => {}}>
            <Ionicons name='trash-outline' size={24} color='black'/>
        </TouchableOpacity>

        {/*<IconButton onClick={onClickHandler}>*/}
        {/*    <Delete/>*/}
        {/*</IconButton>*/}
    </View>
})

const styles = StyleSheet.create({
        task: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 4,

        }
    }
)
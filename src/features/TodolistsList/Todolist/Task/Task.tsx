import React, {useCallback} from 'react'
import {EditableSpan} from '../../../../components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '../../../../api/todolists-api'
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Checkbox from 'expo-checkbox';
import {Ionicons} from '@expo/vector-icons';
import {globalStyles} from '../../../../../global-styles';

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
                 style={props.task.status === TaskStatuses.Completed ? {
                     ...styles.task,
                     opacity: 0.3
                 } : {...styles.task}}>
        <View style={{flexDirection: 'row'}}>
            <Checkbox
                style={{marginRight: 12}}
                value={props.task.status === TaskStatuses.Completed}
                onValueChange={onChangeHandler}
                color={globalStyles.primaryColor.color}
            />
            <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
        </View>

        <TouchableOpacity style={{marginLeft: 25}} onPress={onClickHandler}>
            <Ionicons name='trash-outline' size={24} color={globalStyles.primaryColor.color}/>
        </TouchableOpacity>
    </View>
})

const styles = StyleSheet.create({
        task: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 4,
            justifyContent: 'space-between'

        }
    }
)
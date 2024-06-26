import React, {useCallback, useEffect} from 'react'
import {AddItemForm} from '../../../components/AddItemForm/AddItemForm'
import {EditableSpan} from '../../../components/EditableSpan/EditableSpan'
import {Task} from './Task/Task'
import {TaskStatuses, TaskType} from '../../../api/todolists-api'
import {FilterValuesType, TodolistDomainType} from '../todolists-reducer'
import {useDispatch} from 'react-redux'
import {fetchTasksTC} from '../tasks-reducer'
import {Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {globalStyles} from '../../../../global-styles';

type PropsType = {
    todolist: TodolistDomainType
    tasks: Array<TaskType>
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    demo?: boolean
}

export const Todolist = React.memo(function ({demo = false, ...props}: PropsType) {
    console.log('Todolist called')

    const dispatch = useDispatch()
    useEffect(() => {
        if (demo) {
            return
        }
        const thunk = fetchTasksTC(props.todolist.id)
        dispatch(thunk)
    }, [])

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.todolist.id)
    }, [props.addTask, props.todolist.id])

    const removeTodolist = () => {
        props.removeTodolist(props.todolist.id)
    }
    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.todolist.id, title)
    }, [props.todolist.id, props.changeTodolistTitle])

    const onAllClickHandler = useCallback(() => props.changeFilter('all', props.todolist.id), [props.todolist.id, props.changeFilter])
    const onActiveClickHandler = useCallback(() => props.changeFilter('active', props.todolist.id), [props.todolist.id, props.changeFilter])
    const onCompletedClickHandler = useCallback(() => props.changeFilter('completed', props.todolist.id), [props.todolist.id, props.changeFilter])


    let tasksForTodolist = props.tasks

    if (props.todolist.filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.New)
    }
    if (props.todolist.filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.Completed)
    }

    return <View style={[globalStyles.container_second]}>
        <View >
            <View style={[ {flexDirection: 'row', alignItems: 'center', justifyContent: 'center',padding: 4}]}>
                <EditableSpan value={props.todolist.title} onChange={changeTodolistTitle}/>
                {/*disabled={props.todolist.entityStatus === 'loading'}*/}
                <TouchableOpacity style={{marginLeft: 25}} onPress={removeTodolist}>
                    <Ionicons name='trash-outline' size={24} color={globalStyles.primaryColor.color}/>
                </TouchableOpacity>
            </View>
            <AddItemForm addItem={addTask} disabled={props.todolist.entityStatus === 'loading'}/>
        </View>


        <View style={{padding: 8}}>
            {
                tasksForTodolist.map(t => <Task key={t.id} task={t} todolistId={props.todolist.id}
                                                removeTask={props.removeTask}
                                                changeTaskTitle={props.changeTaskTitle}
                                                changeTaskStatus={props.changeTaskStatus}
                />)
            }
        </View>
        {/*<div style={{paddingTop: '10px'}}>*/}
        {/*    <Button variant={props.todolist.filter === 'all' ? 'outlined' : 'text'}*/}
        {/*            onClick={onAllClickHandler}*/}
        {/*            color={'default'}*/}
        {/*    >All*/}
        {/*    </Button>*/}
        {/*    <Button variant={props.todolist.filter === 'active' ? 'outlined' : 'text'}*/}
        {/*            onClick={onActiveClickHandler}*/}
        {/*            color={'primary'}>Active*/}
        {/*    </Button>*/}
        {/*    <Button variant={props.todolist.filter === 'completed' ? 'outlined' : 'text'}*/}
        {/*            onClick={onCompletedClickHandler}*/}
        {/*            color={'secondary'}>Completed*/}
        {/*    </Button>*/}
        {/*</div>*/}
    </View>
})



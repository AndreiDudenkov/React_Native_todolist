import {Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import Checkbox from 'expo-checkbox';
import {ReactElement, ReactNode, useState} from 'react';

export default function App() {
    const [value, setValue] = useState('')
    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: false},
        {id: 3, title: 'React', isDone: true},
        {id: 3, title: 'React Native', isDone: false}
    ])

    const addTask = () => {
const newTask = {id: tasks.length +1, title: value, isDone: false}
        setTasks([...tasks, newTask])
        setValue('')
        // Alert.alert(JSON.stringify(newTask))
    }
    return (
        <View style={styles.container}>
            <HideKeyboard>
                <View style={[globalStyles.border, {width: '80%', alignItems: 'center', paddingVertical: 30}]}>
                    <TextInput style={[styles.input]} value={value} onChangeText={setValue}/>
                </View>
            </HideKeyboard>
            <View style={[globalStyles.border]}>
                <Button color={'#f9bc60'} title={'Add task'} onPress={addTask}/>
            </View>
            <View style={{width: '60%'}}>
                {tasks.map((task) => {
                    return <View key={task.id} style={[globalStyles.border, styles.taskWrapper]}>
                        <Checkbox value={task.isDone} onValueChange={() => {
                        }}/>
                        <Text>{task.title}</Text>
                    </View>
                })}
            </View>
        </View>
    );
}

const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004643',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        backgroundColor: 'white',
        fontSize: 18,
        padding: 4,
        // marginBottom: 15,
    },
    taskWrapper: {
        flexDirection: 'row',
        backgroundColor: '#fffffe',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 20,
        marginVertical: 3
    },
    button: {
        backgroundColor: '#f9bc60',
    }
});

const globalStyles = StyleSheet.create({
    border: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'red',
    }
})
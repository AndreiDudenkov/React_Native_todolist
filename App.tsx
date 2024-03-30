import {Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import Checkbox from 'expo-checkbox';
import {ReactElement, ReactNode, useState} from 'react';
import {Input} from './Input/Input';
import {globalStyles} from './global-styles';
import {Main} from './src/app/App';
import {Provider} from 'react-redux';
import {store} from './src/app/store';


export default function App() {
//     const [value, setValue] = useState('')
//     const [show, setShow] = useState(0)
//
//     const [tasks, setTasks] = useState([
//         {id: 1, title: 'HTML', isDone: true},
//         {id: 2, title: 'CSS', isDone: true},
//         {id: 3, title: 'JS', isDone: false},
//         {id: 4, title: 'React', isDone: true},
//         {id: 5, title: 'React Native', isDone: false}
//     ])
//     const addTask = () => {
//         const newTask = {id: tasks.length + 1, title: value, isDone: false}
//         setTasks([...tasks, newTask])
//         setValue('')
//     }
//     const changeStatus = (taskId: number, status: boolean) => {
//         setTasks(tasks.map((task) => task.id === taskId ? {...task, isDone: status} : task))
//     }
//     const changeTitle = (taskId:number, title: string) =>{
//         setTasks(tasks.map((task) => task.id === taskId ? {...task, title: title} : task))
//     }
//     return (
//         <View style={styles.container}>
//             <HideKeyboard>
//                 <View style={[globalStyles.border, {width: '80%', alignItems: 'center', paddingVertical: 30}]}>
//                     <TextInput style={[styles.input]} value={value} onChangeText={setValue}/>
//                 </View>
//             </HideKeyboard>
//             <View style={[globalStyles.border]}>
//                 <Button color={'#f9bc60'} title={'Add task'} onPress={addTask}/>
//             </View>
//             <View style={{width: '60%'}}>
//                 {tasks.map((task) => {
//                     return <View key={task.id} style={[globalStyles.border, styles.taskWrapper]}>
//                         <Checkbox value={task.isDone} onValueChange={(value) => {
//                             changeStatus(task.id, value)
//                         }}/>
//                         {show === task.id
//                             ? <Input
//                                 id = {task.id}
//                                 title={task.title}
//                                 changeTitle={changeTitle}
//                                 setShow = {setShow}
//                             />
//                             : <Text onPress={() => setShow(task.id)}>{task.title}</Text>}
//                     </View>
//                 })}
//             </View>
//         </View>
//     );
// }
//
// export const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//         {children}
//     </TouchableWithoutFeedback>
// )

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Main/>
            </View>
        </Provider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004643',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    // input: {
    //     width: '80%',
    //     backgroundColor: 'white',
    //     fontSize: 18,
    //     padding: 4,
    // },
    // taskWrapper: {
    //     flexDirection: 'row',
    //     backgroundColor: '#fffffe',
    //     justifyContent: 'space-between',
    //     paddingVertical: 4,
    //     paddingHorizontal: 20,
    //     marginVertical: 3
    // },
    // button: {
    //     backgroundColor: '#f9bc60',
    // }
});


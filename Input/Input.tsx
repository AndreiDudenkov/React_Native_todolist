import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useState} from 'react';
import {globalStyles} from '../global-styles';

type IProps = {
    title: string
    id: number
    changeTitle: (taskId: number, title: string) => void
    setShow: (taskId: number) => void
}
const Input = (props: IProps) => {
    const [value, setValue] = useState(props.title)
    const changeTitle = (title: string) => {
        setValue(title)
    }
    return (<View style={{flexDirection: 'row'}}>
        <TextInput
            style={[styles.input, globalStyles.border]}
            value={value}
            onChangeText={(title) => {
                changeTitle(title)
            }}
        />
        <Button
            title={'+'} onPress={() => {
            props.changeTitle(props.id, value)
            props.setShow(0)
        }
        }/>
    </View>)
}
const styles = StyleSheet.create({
    input: {
        width: '80%',
        backgroundColor: 'white',
        fontSize: 18,
        padding: 4,
    }
})
export {Input}
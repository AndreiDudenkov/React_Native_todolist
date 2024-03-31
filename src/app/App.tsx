import React from 'react'
import './App.css'

import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useSelector} from 'react-redux'
import {AppRootStateType} from './store'
import {RequestStatusType} from './app-reducer'
import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import {globalStyles} from '../../global-styles';

type PropsType = {
    demo?: boolean
}

export function Main({demo = false}: PropsType) {
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex:1,  marginTop: 40,}}>
            <View style={{flex:1}} >
                <View style={{flexDirection:'row', justifyContent: 'center'}}>
                    <Text style={[globalStyles.primaryColor, {fontSize: 20}]}>Task Assistant</Text>
                </View>
                <TodolistsList demo={demo}/>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}



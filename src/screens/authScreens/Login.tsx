import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../../../global-styles';
import {RootAuthScreenProps} from '../../utils/NavigationsType';

export const Login = ({navigation}: RootAuthScreenProps) => {
    return (
        <View style={[globalStyles.center]}>
            <Text>Login</Text>
            <Button
                title='Go to SignUp'
                onPress={() => navigation.navigate('Auth', {screen: "SignUp", params: {id:100, name: 'User'}})}
            />
        </View>
    );
};


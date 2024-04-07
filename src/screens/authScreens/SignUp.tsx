import {Button, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../../../global-styles';
import {RootAuthScreenProps} from '../../utils/NavigationsType';

export const SignUp = ({route, navigation}: RootAuthScreenProps) => {
    return (
        <View style={[globalStyles.center]}>
            <Text>SignUp</Text>
            <Text>{JSON.stringify(route.params, null, 2)}</Text>
            <Button
                title='Go to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};
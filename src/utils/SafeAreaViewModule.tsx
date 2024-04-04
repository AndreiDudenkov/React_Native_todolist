import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';


type SafeAreaViewModuleType = {
    children: JSX.Element
}
export const SafeAreaViewModule = (props:SafeAreaViewModuleType ) => {
    return (
        <SafeAreaView style={{flex:1}}>
            {props.children}
        </SafeAreaView>
    );
};

export default SafeAreaView;
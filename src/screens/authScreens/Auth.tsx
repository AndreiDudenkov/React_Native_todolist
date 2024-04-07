import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './Login';
import {SignUp} from './SignUp';


const Stack = createStackNavigator()
export const Auth = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
        </Stack.Navigator>

    );
};

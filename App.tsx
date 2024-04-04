import {Button, Text, View} from 'react-native';
import {Main} from './src/app/App';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {globalStyles} from './global-styles';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaViewModule} from './src/utils/SafeAreaViewModule';
import {CompletedProps, HomeProps, PlansProps, RootStackParamList} from './src/utils/NavigationsType';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen({navigation}: HomeProps) {
    return (
            <View style={[globalStyles.container]}>
                <Main/>
                <Button
                    title='Go to Plans'
                    onPress={() => navigation.navigate('Plans', {parameters: 'Plane'})}
                />
                <Button
                    title='Go to Completed'
                    onPress={() => navigation.navigate('Completed')}
                />
            </View>
    );
}

function Plans({route, navigation}: PlansProps) {
    const param = route.params
    return (
        <SafeAreaViewModule>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>Plans Screen</Text>
                <Text>{param?.parameters}</Text>
                <Button
                    title='Go to Home'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </SafeAreaViewModule>
    );
}

function Completed({navigation}: CompletedProps) {
    return (
        <SafeAreaViewModule>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>Completed Screen</Text>
                <Button
                    title='Go to Home'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </SafeAreaViewModule>
    );
}

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createBottomTabNavigator<RootStackParamList>();
// const Stack = createDrawerNavigator<RootStackParamList>();
export default function App() {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Provider store={store}>
                    <Stack.Navigator>
                        <Stack.Screen name='Home' component={HomeScreen}/>
                        <Stack.Screen name='Plans' component={Plans}/>
                        <Stack.Screen name='Completed' component={Completed}/>
                    </Stack.Navigator>
                </Provider>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}



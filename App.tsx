import {Button, FlatList, Text, View} from 'react-native';
import {Main} from './src/app/App';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {globalStyles} from './global-styles';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaViewModule} from './src/utils/SafeAreaViewModule';
import {CompletedProps, HomeProps, PlansProps, RootStackParamList} from './src/utils/NavigationsType';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Auth} from './src/screens/authScreens/Auth';
import {UserData, UserDataType} from './src/data/UserData';
import {useState} from 'react';

function HomeScreen({navigation}: HomeProps) {
    return (
            <View style={[globalStyles.container]}>
                <Main/>
                <Button
                    title='Go to Login'
                    onPress={() => navigation.navigate('Auth', {screen: 'Login'})}
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
                    title='Go to Completed'
                    onPress={() => navigation.navigate('Completed', {parameters: UserData})}
                />
            </View>
        </SafeAreaViewModule>
    );
}

function Completed({route, navigation}: CompletedProps) {
    const param = route.params
    type ItemProps = {title: string};
    const Item = ({title}: ItemProps) => (
        <View >
            <Text >{title}</Text>
        </View>
    );
    return (
        <SafeAreaViewModule>
            <FlatList
                data={param?.parameters}
                renderItem={({item}) => <Item title={item.role} />}
                keyExtractor={item => item.id.toString()}
            />
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
                        <Stack.Screen name='Auth' component={Auth}/>
                        <Stack.Screen name='Home' component={HomeScreen}/>
                        <Stack.Screen name='Plans' component={Plans}/>
                        <Stack.Screen name='Completed' component={Completed}/>
                    </Stack.Navigator>
                </Provider>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}



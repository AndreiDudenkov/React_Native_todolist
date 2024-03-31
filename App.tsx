import {StyleSheet, View} from 'react-native';
import {Main} from './src/app/App';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {globalStyles} from './global-styles';


export default function App() {

    return (
        <Provider store={store}>
            <View style={[globalStyles.container]}>
                <Main/>
            </View>
        </Provider>
    )
}



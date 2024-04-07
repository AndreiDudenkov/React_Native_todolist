import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';
import {UserDataType} from '../data/UserData';


export type RootStackParamList = {
    Auth: NavigatorScreenParams<RootAuthParamList>;
    Home: undefined;
    Plans: { parameters: string } | undefined;
    Completed: {parameters: UserDataType[]} | undefined ;
}
export type RootAuthParamList = {
    Login: undefined;
    SignUp: { id: number, name: string } | undefined;
}


export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type CompletedProps = NativeStackScreenProps<RootStackParamList, 'Completed'>;
export type PlansProps = NativeStackScreenProps<RootStackParamList, 'Plans'>;

export type RootAuthScreenProps = CompositeScreenProps<
    BottomTabScreenProps<RootStackParamList, 'Auth'>,
    StackScreenProps<RootAuthParamList>
>;
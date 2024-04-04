import {NativeStackScreenProps} from '@react-navigation/native-stack';
type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Plans'>;


export type RootStackParamList = {
    Home:   undefined;
    Plans:{parameters: string} | undefined;
    Completed: undefined;
}
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type CompletedProps = NativeStackScreenProps<RootStackParamList, 'Completed'>;
export type PlansProps = NativeStackScreenProps<RootStackParamList, 'Plans'>;
import {tasksReducer} from '../features/TodolistsList/tasks-reducer';
import {todolistsReducer} from '../features/TodolistsList/todolists-reducer';
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './app-reducer'
import {applyMiddleware, combineReducers, createStore} from 'redux';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
    app: appReducer
})
// непосредственно создаём store
// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

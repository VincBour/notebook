import thunk from 'redux-thunk';
import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import { INote } from '../components/notes/Notes';
import { interfaceReducer } from './reducers/interfaceReducer';

export interface INoteBookState {
    interface : IInterfaceState
}

export interface IInterfaceState {
    dataNote: INote[];
    isLoaded: boolean;
    errorInfo: string;
}

const initialState: INoteBookState = {
    interface: {
        dataNote: [],
        isLoaded: false,
        errorInfo: ''
    }
};

export const configureStore = () => {
    //* middleware
    const middleware = [
        thunk
    ];

    //* combine reducer
    const rootReducer = combineReducers({
        interface: interfaceReducer
    });

    //* redux devtool
    const hasDevTool = (typeof window) && (window as any).__REDUX_DEVTOOLS_EXTENSION__;
    const enhancers = hasDevTool ? [(window as any).__REDUX_DEVTOOLS_EXTENSION__()] : [];

    //* createStore
    return createStore(
        rootReducer,
        {...initialState},
        compose(applyMiddleware(...middleware), ...enhancers)
    );
};

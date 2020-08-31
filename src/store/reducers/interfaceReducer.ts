import { Reducer, AnyAction } from "redux";
import { IInterfaceState } from "../configureStore";
import { LOAD_DATA_NOTE } from "../actions/interfaceActions";

export const interfaceReducer: Reducer<IInterfaceState, AnyAction> = (state: IInterfaceState | undefined, action: AnyAction): IInterfaceState => {
    if (!state) return {} as IInterfaceState;

    switch (action.type) {
        case LOAD_DATA_NOTE:
            return {...state, dataNote: action.payload}
        default:
            return state;
    }
}
import { INote } from "../../components/notes/Notes";

export const LOAD_DATA_NOTE = 'LOAD_DATANOTE';
export const LOADED_DATA_NOTE ='LOADED_DATA_NOTE';
export const ERROR_LOADED_DATA_NOTE = 'ERROR_LOADED_DATA_NOTE';

export const loadDataNote = (data: INote[]) => {
    return {
        type: LOAD_DATA_NOTE,
        payload: data
    }
};

export const loadedDataNote = () => {
    return {
        type: LOADED_DATA_NOTE
    }
}

export const errorLoadedDataNote = () => {
    return {
        type: ERROR_LOADED_DATA_NOTE
    }
}
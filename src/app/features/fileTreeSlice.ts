import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IFile } from '../../interfaces';

interface IClickedFile {
    filename: string;
    filecontent: string;
}
interface initialState {
    openedFiles: IFile[];
    clickedFile: IClickedFile;
}

const initialState: initialState = {
    openedFiles: [],
    clickedFile: {
        filename: '',
        filecontent: '',
    }
}

export const FileTreeSlice = createSlice({
    name: 'fileTree',
    initialState,
    reducers: {},
})


export const { } = FileTreeSlice.actions;

export default FileTreeSlice.reducer;
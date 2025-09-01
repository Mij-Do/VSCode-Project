import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IFile } from '../../interfaces';

interface IClickedFile {
    filename: string;
    filecontent: string | undefined;
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
    reducers: {
        setOpenedFile: (state, action: PayloadAction<IFile[]>) => {
            state.openedFiles = action.payload;
        },
        setClickedFiles: (state, action: PayloadAction<IClickedFile>) => {
            state.clickedFile = action.payload;
        }
    },
})


export const { setOpenedFile, setClickedFiles } = FileTreeSlice.actions;

export default FileTreeSlice.reducer;
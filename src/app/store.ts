import { configureStore } from '@reduxjs/toolkit'
import { FileTreeSlice } from './features/fileTreeSlice';

export const store = configureStore({
    reducer: {
        "fileTree": FileTreeSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import ModalSlice from './Slice/ModalSlice';
import WorksSlice from './Slice/WorksSlice';


export const store = configureStore({
    reducer: {
        modal: ModalSlice,
        works: WorksSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
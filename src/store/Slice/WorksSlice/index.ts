import { createSlice } from "@reduxjs/toolkit"
import { Status } from "../../../types/Status"
import { TWork } from "../../../types/work"
import { fetchWorks, postWork } from "./asyncActions"


interface IState {
    items: TWork[],
    loading: Status,
    loadingPost: Status
}

const initialState: IState = {
    items: [],
    loading: Status.LOADING,
    loadingPost: Status.DEFAULT
}



const WorksSlice = createSlice({
    name: 'works',
    initialState,
    reducers: {

        setDefaultLoading: (state) => {
            state.loadingPost = Status.DEFAULT;
        }
    },

    extraReducers: (builder) => {

        // FETCH
        builder.addCase(fetchWorks.pending, (state) => {
            state.loading = Status.LOADING;
            state.items = []
        })
        builder.addCase(fetchWorks.fulfilled, (state, action) => {
            state.loading = Status.SUCCESS;
            state.items = action.payload.reverse()
        })
        builder.addCase(fetchWorks.rejected, (state) => {
            state.loading = Status.ERROR;
            state.items = []
        })
        
        //POST
        builder.addCase(postWork.pending, (state) => {
            state.loadingPost = Status.LOADING;
        })
        builder.addCase(postWork.fulfilled, (state, action) => {
            state.loadingPost = Status.SUCCESS;
            state.items = [...state.items, action.payload]
        })
        builder.addCase(postWork.rejected, (state) => {
            state.loadingPost = Status.ERROR;
        })
        
    }
})


export const { setDefaultLoading } = WorksSlice.actions;
export default WorksSlice.reducer;
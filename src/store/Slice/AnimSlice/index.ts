
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UseAnimateProps } from "../../../hooks/useAnimate";

interface IState {
    style: UseAnimateProps,
    handleClose: () => void;
}

const initialState: IState = {
    style: {
        mount:{
            style: {
                // opacity: 1,
            },
            delay: 400
        },
        unMount: {
            style: {
                opacity: 0
            },
            delay: 400
        }   
    },
    handleClose: () => null
}

const AnimSlice = createSlice({
    name:'anim',
    initialState,

    reducers:  {
        setStyle: (state, action:PayloadAction<UseAnimateProps>) => {
            state.style = action.payload
        },

        setHandleClose: (state, action:PayloadAction<() => void>) => {
            state.handleClose = action.payload
        },

        setAnimState: (state, action:PayloadAction<IState>) => {
            state = action.payload;
        }
    }
})


export const {setStyle, setHandleClose, setAnimState} = AnimSlice.actions;

export default AnimSlice.reducer;
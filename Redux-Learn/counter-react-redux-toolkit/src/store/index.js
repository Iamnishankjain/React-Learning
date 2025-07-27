import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal: 0},
    reducers: {
        increment: (state)=>{
            state.counterVal++;
        },
        decrement: (state)=>{
            state.counterVal--;
        },
        add: (state,action)=>{
            state.counterVal+=Number(action.payload.value);
        },
        sub: (state,action)=>{
            state.counterVal-=action.payload.value;
        },
    },
});

const counterStore = configureStore({reducer:{
    counter: counterSlice.reducer
}});

export const counterAction=counterSlice.actions;
export default counterStore;



/*
let INITIAL_VALUE = {
    counter: 0,
    Privacy: false,
}

const counterReducer = (counterStore=INITIAL_VALUE,action)=>{
    let newcounter=counterStore;
    if(action.type==="INCREMENT"){
        return {...counterStore,counter: counterStore.counter+1,};
    }
    else if(action.type ==="DECREMENT"){
        return {...counterStore,counter: counterStore.counter-1,};
    }
    else if(action.type ==="ADD"){
        return {...counterStore,counter: counterStore.counter+Number(action.payload.value),};
    }
    else if(action.type ==="SUB"){
        return {...counterStore,counter: counterStore.counter-action.payload.value,};
    }
    else if(action.type === "PrivacyToggle"){
        return {...counterStore,Privacy: !counterStore.Privacy}
    }
    return newcounter;
}

*/
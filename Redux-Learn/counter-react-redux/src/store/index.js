import {createStore} from "redux";

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


const counterStore = createStore(counterReducer);

export default counterStore;
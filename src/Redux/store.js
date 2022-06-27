import {legacy_createStore as createStore } from "redux"

import { reduser } from "./reduser"


export const store=createStore(reduser,{ count : 0,todos:[]})
store.subscribe(()=>{
    console.log(store.getState())
})



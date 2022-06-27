import React from "react";
import {store} from "../Redux/store"
import {inccount,rescount,deccount} from '../Redux/action';
import {useSelector,useDispatch} from "react-redux"

export const Counter=()=>{

    
  const {count}=useSelector((state)=>state)

  const dispatch=useDispatch()

const handleclick=()=>{
store.dispatch(inccount(1))
}
    return<>
   <h1>Count:{count}</h1>
     <button onClick={()=>dispatch(inccount(1))}>INCREMENT</button>
     <button onClick={()=>dispatch(deccount(1))}>DECREMENT</button>
     <button onClick={()=>dispatch(rescount())}>RESET</button>

     <br/>
     <br/>
     <br/>

     <br/> 
    </>
}
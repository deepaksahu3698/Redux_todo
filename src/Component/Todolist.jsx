import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { toggletodo,deleteetodo} from "../Redux/action"

export const Todolist=()=>{
    const {todos}=useSelector((state)=>state)
    const dispatch=useDispatch()

    return(
    <div>
    {todos.map((e)=>(
        <div key={e.id}>
        <p >{e.title}{"-->"}{e.status?"Completed":"Not Completed"}</p>

        <button onClick={()=>dispatch(toggletodo(e.id))}>Toggle Todo</button>
        <button onClick={()=>{dispatch(deleteetodo(e.id)) }}>Remove</button>
        </div>
    ))
        
    }
    </div>
    )
    
}
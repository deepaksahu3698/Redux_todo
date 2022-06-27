import React from "react";
import {useDispatch} from "react-redux"
import{ v4 as uuid} from "uuid"
import { addtodo } from "../Redux/action";


export const Todoinput=()=>{

    const[inputvale,stateinput]=React.useState("")
    const dispatch =useDispatch()
    const haldleadd=()=>{
const payload={
    title:inputvale,
    status:false,
    id:uuid()
}
// console.log(payload)

dispatch(addtodo(payload))
    }

    return <div>
        <input type="text" name="" id="" placeholder="Add Todos" value={inputvale} onChange={(e)=>stateinput(e.target.value)}/>
        <button onClick={haldleadd}>Add todo</button>
    </div>
    
}
import React from "react"

import { Todoinput } from "./Todoinput"
import { Todolist } from "./Todolist"
export const Todos =()=>{

    return(
    
        <div>
        {/* <h1>Todod</h1> */}
         <Todoinput/>
        <Todolist/> 
        </div>
    )
}
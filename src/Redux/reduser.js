import {INC_COUNT,DEC_COUNT,REST_COUNT ,ADD_TODO,TOGGLE_TODO,DELETE_TODO} from "./action"
export const  reduser=(store,action)=>{
switch(action.type){
    case  INC_COUNT:
        return{
            ... store,
            count:store.count+action.payload
        };
    case DEC_COUNT:
            return{
              ...store,
              count:store.count-action.payload  
            };
     case REST_COUNT:
                return{
                  ...store,
                  count:0 
                };
     case ADD_TODO:
        return{
            ...store,
            todos:[...store.todos,action.payload]
        } 
    case TOGGLE_TODO:
        return{
            ...store,
            todos:store.todos.map((e)=>
                e.id===action.payload?{...e,status:!e.status}:e
            )
        }   
        
        case DELETE_TODO:
        return{
            ...store,
            todos:store.todos.filter((todo)=>todo.id!==action.payload)
            
        } 
    default:
        return store
}
}
//ACTION TYPE

export const INC_COUNT="INC_COUNT"
export const DEC_COUNT="DEC_COUNT"
export const REST_COUNT="REST_COUNT"


//TODOS

export const ADD_TODO ="ADD_TODO"
export const TOGGLE_TODO ="TOGGLE_TODO"
export const DELETE_TODO ="DELETE_TODO"
//ACTION CREATER

export const inccount=(data)=>({
type:INC_COUNT,
payload:data
})
export const deccount=(data)=>({
    type:DEC_COUNT,
    payload:data
    })
    export const rescount=(data)=>({
        type:REST_COUNT,
        payload:data
        })

        export const addtodo=(payload)=>({
            type:ADD_TODO,
            payload
        }
            );


        export const toggletodo=(payload)=>({
                type:TOGGLE_TODO,
                payload
            }
                );
                export const deleteetodo=(payload)=>({
                    type:DELETE_TODO,
                    payload
                }
                    );
import { useEffect, useState } from "react"

export const Timer=()=>{
    const [counter,setCounter]=useState(5);
    useEffect(()=>{
        setInterval(()=>{
            setCounter((p)=>{
                if(p===0){
                    return 0
                }
                else{
                    return p-1
                }
            })
        },1000)
    },[])


    return(
        <div>{counter}</div>
    )
}
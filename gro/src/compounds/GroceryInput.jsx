import { useState } from "react"

export const GroserInput=({getData})=>{
    const [data, setData]=useState("")
    const handleChange=(e)=>{
        setData(e.target.value)

    }
    const handleClick=()=>{
        getData(data)
    }
    return <>
    <input type="text"  onChange={handleChange} placeholder="enter item"/>
    <button onClick={handleClick}>ADD</button>
    </>
}
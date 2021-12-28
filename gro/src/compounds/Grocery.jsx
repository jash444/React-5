import { useState } from "react"
import { GroserInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList"
import { nanoid } from "nanoid"
function Grosery(){
    const [list,setList]=useState([])
    const handleClick=(data)=>{
        console.log("data from parent",{data})
        const payload={
            title:data,
            status:false,
            id:nanoid(7)
        }
        setList([...list,payload])
    }
    const toggle=()=>{
        //deleting
        console.log("res from toggle")
    }
    return(
        <>
        <GroserInput getData={handleClick} />
        {list.map((e, i)=>(
            <GroceryList key={e.id}{...e}  toggle={toggle}/>
        ))}
        </>
    )
}
export default Grosery
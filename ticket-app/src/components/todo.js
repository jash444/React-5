import { useState } from "react";
import { useEffect } from "react";


function Tudo(){
    const [text,setText]=useState("");
    const [todo,setTodo]=useState([]);
    const[page,setPage]=useState(1)

    useEffect(()=>{
        getTodo()
    },[page]);

    const getTodo=()=>{
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
        .then((d)=>d.json())
        .then((res)=>{setTodo(res)
        })
    };
    const addTodo=()=>{
        //console.log(text)
        const payload={
            title:text,
            status:false,
        };
        fetch("http://localhost:3001/todos",{
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "content-type":"application/json",
        },
    })

    };

    return(
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)}
            placeholder="enter the" />
            <button onClick={addTodo}>add todo</button>

            {todo.map((e,i)=>(
                <div key={i}>{e.title}</div>
            ))}
            <button onClick={()=>setPage(page-1)}>pre</button>
            <button onClick={()=>setPage(page+1)}>next</button>

            
            
        </div>
    )
}
export default Tudo
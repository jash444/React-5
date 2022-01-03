import { useState } from "react"
import{nanoid} from "nanoid"




function RecipeForm(){
    const [title,setTitle]=useState("")
    const [ingredients,setIngredients]=useState("")
    const [time,setTime]=useState("")
    const[image,setImage]=useState("")
    const[instructions,setInstructions]=useState("")
    const [data,setData]=useState([])

    const FormData=()=>{
        var payload={
            title:title,
            ingredients:ingredients,
            time:time,
            image:image,
            instructions:instructions,
            id:nanoid(7)
        };
        
       
       setData([...data,payload])


    }
    const orderItem=(e)=>{
        return(
            <div>
                <p>Your order item is {e.title}</p>
            </div>
        )
    }
    
    return(
        <div>
     
             <input onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title" type="text" />
             <input  onChange={(e)=>{setIngredients(e.target.value)}}placeholder="Ingredients" type="text" />
             <input onChange={(e)=>{setTime(e.target.value)}} placeholder="Time To cook" type="text" />
             <input onChange={(e)=>{setImage(e.target.value)}} placeholder="Image" type="file" />
             <input onChange={(e)=>{setInstructions(e.target.value)}} placeholder="Instructions" type="text" />
             <button onClick={FormData}>submit</button>

         
            {data.map((e)=>(
                <div key={e.id}>
                    <p>Title : {e.title}</p>
                    <p>Ingredients{e.ingredients}</p>
                    <p>Time : {e.time}</p>
                   <img src={e.image}></img>
                    <p>instructions:{instructions}</p>
                    <button onClick={(e)=>{return orderItem(e)}}>orderitem</button>
                </div>
            ))}
            <br></br>
            <br></br>
            <br />
            <div>
                <orderItem />
            </div>
        </div>

    )
} 

export default RecipeForm
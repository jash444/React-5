export const GroceryList=({title,status,id,toggle})=>{
return(<>
<div>{title}-{status ? "done":"notdone"}</div>
<button onClick={()=>{toggle(id)}}>delete</button>
</>)
}
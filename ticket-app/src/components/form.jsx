import { useEffect } from "react";

function Form() {
    console.log("before")
    useEffect(()=>{
        console.log("jaswanth")
    },[])
    console.log("after")
    return(
        <form>
            <input type="text" />
        </form>
    )
}
export default Form
import { useState } from "react"
import { store } from "../redux/store"

export const Login=()=>{
    const isAuth=useSelector(store=>store.isAuth)
    const [email,SetEmail]=useState("")
    const [pass, setPass]=useState("")
    const dispatch =useDispatch()


    return (<div>
        <input type="email" placeholder="enter email or user name" />
        <input type="password" placeholder="enter passward" />
        <button onClick={handlelogin}>Login</button>
    </div>)

}
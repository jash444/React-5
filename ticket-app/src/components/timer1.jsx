import {useEffect,useState} from "react"
function Timer1(){
const [counter,setCounter]=useState(0)
const [min,setMin]=useState(0)
const [hour,setHour]=useState(0)


useEffect(()=>{
   const id= setInterval(()=>{
        setCounter((p)=>{

            if(p==59){
               
                setCounter(0)
                
            }
            else{
                return p+1
            }
        }
        )

    },100)


},[])
useEffect(()=>{
    const min= setInterval(()=>{
         setMin((m)=>{
 
             if(m==59){
                
                 setMin(0)
                 
             }
             else{
                 return m=m+1
             }
         }
         )
 
     },1000)
 
 
 },[])
 useEffect(()=>{
    const min= setInterval(()=>{
         setHour((h)=>{
 
             if(h==59){
                
                 setHour(0)
                 
             }
             else{
                 return h=h+1
             }
         }
         )
 
     },60000)
 
 
 },[])





return(
    <div>
        <h4 >{hour}:{min}:{counter}</h4>
    </div>
)

}


export default Timer1
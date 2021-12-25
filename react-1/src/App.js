
import './App.css';

import { useState } from 'react';

function App() {
  const [age,setAge]=useState(0)

  function addOne(a){
    setAge( age+a )
  }
  
if(age>10){
  return <div>coutre reach max value</div>
}

  return (

<div className="App">
     <h3>counter:{age}</h3>

          <button onClick={()=>addOne(1)}>add 1</button>
        <button onClick={()=>addOne(-1)}>reduce 1</button>
      

    </div>
  );
}

export default App;

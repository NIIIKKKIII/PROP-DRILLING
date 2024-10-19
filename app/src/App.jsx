//PROP DRILLING

import { useState } from "react";

function App(){

  const [count, setCount] = useState(0);
return <div>
  <Count count={count}/>
  <Buttons count={count} setCount= {setCount}/>

</div>  
}


function Count({count}){
  return <div>
     {count}
  </div>

}

function Buttons({count, setCount}){

  return <div>
    <button onClick={()=>{
  setCount(count +1)
    }}>Increase</button>
    <button onClick={()=>{
  setCount(count -1)
    }}>Decrease</button>
  </div>

}




export default App;




//What if I said that I need the buttons component in the Count and not in the App itself then the code will look like this 

import { useState } from "react"

function App(){
  const [count, setcount] = useState(0)
  return <div>
    <Count count={count} setcount={setcount}/>
  </div>
}

function Count({count, setcount}){
  return <div>
    {count}
<Buttons count= {count} setcount={setcount}/>  
  </div>   
// Even tho This Count component does not need setcount to be its prop but still recives it because it needs to pass it down to the button and this is known as prop drilling 
}


function Buttons({count, setcount}){
  return <div>
    <button onClick={()=>{
    setcount(count+1)
    }}>increase</button>
    <button onClick={()=>{
  setcount(count-1)
    }}>decrease</button>
  </div>
}


export default App;



// Now prop drilling becomes a problem when we have many states and if we need to have a prop in a way down component then we will need to pass it down at every step and this will be very hectic and will make our code ugly and managing the props would be difficult then
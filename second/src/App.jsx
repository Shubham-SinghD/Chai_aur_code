import { useState } from "react"


function App() {
  const [counter,setCounter]=useState(0);
  const Increment=()=>{
    if(counter<20){
      setCounter(counter+1);
    }else{
      setCounter(counter);
    }
  };
  const Decrement=()=>{
    if(counter>0){
      setCounter(counter-1);
    }else{
      counter;
    }
  };
  return (
  <>
   <button onClick={Increment}>Counter+</button>
   <br />
    <button onClick={Decrement}>Counter -</button>
    <h1>Counter : {counter}</h1>
  </>
  )
}
export default App

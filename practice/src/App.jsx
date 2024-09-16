import { useState } from 'react'
function App() {

let [counter,setCounter] = useState(1)
const addValue = () => {
  // console.log("value added",Math.random());

    
  setCounter(counter+1)
  // console.log("Clicked",counter);
  // counter += 1;
  
}

const removeValue  = () => {

  if(counter > 0){
  setCounter(counter-1)
  }
  // console.log("remove 1 ", counter)
  // counter -=1;
  
}
  return (
    <>
    <body >
      
         <h1>Chai or react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button 
        onClick={removeValue}
      >Remove value</button>
      </body>
 
    </>
  )
}

export default App

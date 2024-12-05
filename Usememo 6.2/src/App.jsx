import { useMemo, useState } from 'react'


function App() {
  
  const [counter, setCounter] = useState(0);
  const [inputvalue,setinputvalue] = useState(1);

 /*  let count = 0;
  for(let i=0; i <=inputvalue;i++ ){
    count=count+i;
  } */
  // this rerenders even if the input value is same as the counter changes so we will use usemnemo
  let count = useMemo(()=>{
    let finalcount = 0;
    for(let i=0; i <=inputvalue;i++ ){
      finalcount=finalcount+i;
    }
    return finalcount;
  },[inputvalue])

// very close to use effect

  return (
     <div>
        <input type="number"  onChange={function(e){
          setinputvalue(e.target.value);
        }} placeholder='Find sum from 1 to n'/>
        <br />
        Sum from 1 to {inputvalue} is {count}
        <br />
        <button onClick={function(){
          setCounter(counter+1);
        }}>Counter {counter}</button>
     </div>
  )
}

export default App

import { memo, useCallback, useState } from "react";
// if appk rerenders child will 100% re render until you wrap it inside a memo
// if you wrap a child in memo then it will re render only if inputs to the child has changed
function App() {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("hi there");
  }, []);
   // this will not re render now if i use this as 
   // a funtion this will not have any dependency and 
   // will re render again agaim
  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}
// wrapping child inside a memo button component re render even if we dont press
// <button onClick={inputFunction}>Button clicked</button> this button coz app gets re rendered
const ButtonComponent = memo(({ inputFunction }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={inputFunction}>Button clicked</button>
    </div>
  );
});

export default App;

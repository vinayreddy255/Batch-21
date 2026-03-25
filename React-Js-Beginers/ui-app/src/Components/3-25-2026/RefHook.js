import { useState, useRef, useEffect } from "react";
function RefHook() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);
  const inputRef = useRef();
  const incrementAciton = () => {
    setCount(count + 1);
    ref.current = ref.current + 1;
    inputRef.current.focus();
    inputRef.current.style.background = "yellow";
    console.log(inputRef);
  };
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.style.background = "red";
  }, []);

  console.log(ref);
  return (
    <div>
      <h1>Cont:{count}</h1>
      User: <input type="text" ref={inputRef} />
      <h1>RefHook:{ref.current}</h1>
      <button onClick={incrementAciton}>Incement</button>
    </div>
  );
}
export default RefHook;

import { useState, useMemo } from "react";
import { sumOftheValue } from "./utils";
function MemoComponent() {
  const [count, setCount] = useState(0);
  const reslut = useMemo(() => {
    return sumOftheValue(count);
  }, []);

  return (
    <div>
      <h1>MemoComponent</h1>
      <h1>SumReslut:{reslut}</h1>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default MemoComponent;

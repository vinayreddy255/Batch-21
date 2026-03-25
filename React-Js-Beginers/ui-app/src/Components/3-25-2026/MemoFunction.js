import { useState, useCallback } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
function MemoFunction() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(5);
  const [sal, setSaly] = useState(1000);

  const counterAction = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const ageAction = useCallback(() => {
    setAge(age + 5);
  }, [age]);
  const salryAction = useCallback(() => {
    setSaly(sal * 100);
  }, [sal]);
  console.log("Main compoent");
  return (
    <div>
      <h1>MemoFunction</h1>
      <h3>Count:{count}</h3>
      <h3>Age:{age}</h3>
      <h3>Salary:{sal}</h3>
      <ComponentA counterAction={counterAction} />
      <ComponentB ageAction={ageAction} />
      <ComponentC salryAction={salryAction} />
    </div>
  );
}

export default MemoFunction;

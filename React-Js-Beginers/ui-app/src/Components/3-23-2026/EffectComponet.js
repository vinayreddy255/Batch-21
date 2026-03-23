import { useEffect, useState } from "react";
function EffectComponet(params) {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(5);
  const [salry, setSalry] = useState(5000);

  useEffect(() => {
    console.log("Hello Useffect count:", count);
  }, [count]);

  useEffect(() => {
    console.log("Hello Useffect Age:", age, "salary:", salry);
  }, [age, salry]);
  return (
    <div>
      <h1>EffectComponet</h1>
      <h2>Count:{count}</h2>
      <h2>Age:{age}</h2>
      <h2>Salary:{salry}</h2>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <button onClick={() => setAge(age + 5)}>AgeCount</button>
      <button onClick={() => setSalry(salry + 5000)}>Salry</button>
    </div>
  );
}
export default EffectComponet;
// Mountining
// updateining
// unmountining
// useEffect

import { useContext } from "react";
import { MyContext } from "./MyContext";
import ComponentC from "./ComponentC";
function ComponentB(params) {
  const contextData = useContext(MyContext);
  console.log("B compoent:", contextData);
  return (
    <div>
      <h1>ComponentB</h1>
      <p>Name:{contextData.name}</p>
      <p>Email:{contextData.email}</p>
      <ComponentC />
    </div>
  );
}

export default ComponentB;

import { useContext } from "react";
import { MyContext } from "./MyContext";
function ComponentD(params) {
  const contextData = useContext(MyContext);
  console.log("DDDs compoent:", contextData);
  return (
    <div>
      <h1>ComponentD</h1>
      <p>Name:{contextData.name}</p>
      <p>Email:{contextData.email}</p>
    </div>
  );
}

export default ComponentD;

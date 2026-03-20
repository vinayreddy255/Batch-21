import Chaild from "./Chaild";
import { useState } from "react";
function Parent(params) {
  const userDetails = {
    name: "John Doe",
    age: 30,
    email: "test@example.com",
  };
  const [chaildData, setChaildData] = useState("");
  const reciveChaildData = (data) => {
    // console.log("Data received from Chaild component:", data);
    setChaildData(data);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <h2>ChaildData:{chaildData}</h2>
      <Chaild userData={userDetails} onReceiveData={reciveChaildData} />
    </div>
  );
}
export default Parent;

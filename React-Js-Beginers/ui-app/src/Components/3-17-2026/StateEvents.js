import { useState } from "react";
function StateEvents() {
  const [city, setCity] = useState("Hyderabad");
  const [country, setCountry] = useState("India");
  const ChangeCity = () => {
    // alert("City is changed");
    setCountry("USA");
    console.log(country); //b
    setCity("New York");
  };
  return (
    <div>
      <h2>Country:{country}</h2>
      <h2>City:{city}</h2>
      <button onClick={ChangeCity}>ChangeCity</button>
    </div>
  );
}
export default StateEvents;

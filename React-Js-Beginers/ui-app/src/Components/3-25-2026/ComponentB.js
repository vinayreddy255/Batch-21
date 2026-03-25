import { memo } from "react";
function ComponentB(props) {
  console.log("Compoent B");
  return (
    <div>
      <h1>ComponentB</h1>
      <button onClick={props.ageAction}>Age action</button>
    </div>
  );
}
export default memo(ComponentB);

import { memo } from "react";
function ComponentC(props) {
  console.log("Compoent C");
  return (
    <div>
      <h1>ComponentC</h1>
      <button onClick={props.salryAction}>Counter inrement</button>
    </div>
  );
}
export default memo(ComponentC);

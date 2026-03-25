import { memo } from "react";
function ComponentA(props) {
  console.log("Compoent A");
  return (
    <div>
      <h1>ComponentA</h1>
      <button onClick={props.counterAction}>Counter inrement</button>
    </div>
  );
}
export default memo(ComponentA);

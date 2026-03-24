import ComponentB from "./ComponentB";
function ComponentA(params) {
  return (
    <div>
      <h1>ComponentA</h1>
      <ComponentB />
    </div>
  );
}

export default ComponentA;

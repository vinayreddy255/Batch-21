import { useState } from "react";
function Counter(props) {
  const [count, setCount] = useState(0);
  const { name, course, instructor } = props;
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  console.log(name, course, instructor);
  return (
    <div>
      <h2
        style={{
          color: "blue",
          backgroundColor: "lightgray",
          border: "1px solid black",
        }}
      >
        Name: {name}{" "}
      </h2>
      <h2
        style={{
          color: "green",
          backgroundColor: "lightgray",
          border: "1px solid black",
        }}
      >
        Course: {course}
      </h2>
      <h2
        style={{
          color: "orange",
          backgroundColor: "lightgray",
          border: "1px solid black",
        }}
      >
        Instructor: {instructor}
      </h2>
      <h2 style={{ backgroundColor: "lightgray" }}>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default Counter;

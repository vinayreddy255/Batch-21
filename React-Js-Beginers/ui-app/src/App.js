import Welcome from "./Components/3-12-2026/Welcome";
import Header from "./Components/3-12-2026/Header";
import HelloWorld from "./Pages/HelloWorld";
import StateEvents from "./Components/3-17-2026/StateEvents";
import Counter from "./Components/3-17-2026/Counter";
function App() {
  const name = "React courese, welcome to the world of React!";
  const course = "React Js";
  const instructor = "John Doe";
  return (
    <div className="App">
      {/* <h1>{name}</h1> */}
      <Header />
      {/* <Welcome courseName={name} />
      <HelloWorld /> */}
      {/* 17-03-2026 */}
      {/* <StateEvents /> */}
      <Counter name={name} course={course} instructor={instructor} />
    </div>
  );
}

export default App;

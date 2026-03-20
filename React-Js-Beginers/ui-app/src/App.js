import Welcome from "./Components/3-12-2026/Welcome";
import Header from "./Components/3-12-2026/Header";
import HelloWorld from "./Pages/HelloWorld";
import StateEvents from "./Components/3-17-2026/StateEvents";
import Forms from "./Components/3-18-2026/Forms";
import ListsKeys from "./Components/3-20-2026/ListsKeys";
import CondationStyle from "./Components/3-20-2026/CondationStyle";
import Toogle from "./Components/3-20-2026/Toogle";
import Parent from "./Components/3-20-2026/Parent";
// import Counter from "./Components/3-17-2026/Counter";
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
      {/* <Counter name={name} course={course} instructor={instructor} /> */}
      {/* 18-03-2026 */}
      <Forms />
        
      {/* 20-03-2026 */}

      {/* <ListsKeys /> */}
      {/* <CondationStyle /> */}
      {/* <Toogle /> */}
      {/* <Parent /> */}
    </div>
  );
}

export default App;

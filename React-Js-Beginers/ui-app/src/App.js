import Welcome from "./Components/3-12-2026/Welcome";
import Header from "./Components/3-12-2026/Header";
import HelloWorld from "./Pages/HelloWorld";
import StateEvents from "./Components/3-17-2026/StateEvents";
import Forms from "./Components/3-18-2026/Forms";
import ListsKeys from "./Components/3-20-2026/ListsKeys";
import CondationStyle from "./Components/3-20-2026/CondationStyle";
import Toogle from "./Components/3-20-2026/Toogle";
import Parent from "./Components/3-20-2026/Parent";
import Forgments from "./Components/3-23-2026/Forgments";
import EffectComponet from "./Components/3-23-2026/EffectComponet";
import FetchCalls from "./Components/3-23-2026/FetchCalls";
import ComponentA from "./Components/3-4-2026/ComponentA";
import ComponentB from "./Components/3-4-2026/ComponentB";
import ComponentC from "./Components/3-4-2026/ComponentC";
import ComponentD from "./Components/3-4-2026/ComponentD";
import { MyContext } from "./Components/3-4-2026/MyContext";
import MemoComponent from "./Components/3-25-2026/MemoComponent";
import MemoFunction from "./Components/3-25-2026/MemoFunction";
import RefHook from "./Components/3-25-2026/RefHook";
// import Counter from "./Components/3-17-2026/Counter";
function App() {
  const name = "React courese, welcome to the world of React!";
  const course = "React Js";
  const instructor = "John Doe";
  const data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
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
      {/* <Forms /> */}

      {/* 20-03-2026 */}

      {/* <ListsKeys /> */}
      {/* <CondationStyle /> */}
      {/* <Toogle /> */}
      {/* <Parent /> */}

      {/* 23-03-2026 */}
      {/* <Forgments /> */}
      {/* <EffectComponet /> */}
      {/* <FetchCalls /> */}

      {/* 24-03-2026 */}
      {/* <MyContext.Provider value={data}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <ComponentD />
      </MyContext.Provider> */}
      {/* <MyContext.Provider value={data}>
        <ComponentA />
      </MyContext.Provider> */}

      {/*25-03-2026  */}
      {/* <MemoComponent /> */}
      {/* <MemoFunction /> */}
      <RefHook />
    </div>
  );
}

export default App;

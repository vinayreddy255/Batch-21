import Welcome from "./Components/3-12-2026/Welcome";
import Header from "./Components/3-12-2026/Header";
import HelloWorld from "./Pages/HelloWorld";
function App() {
  const name = "React courese, welcome to the world of React!";
  return (
    <div className="App">
      <h1>{name}</h1>
      <Header />
      <Welcome courseName={name} />
      <HelloWorld />
    </div>
  );
}

export default App;

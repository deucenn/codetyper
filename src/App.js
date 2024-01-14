import "./App.css";
import Header from "./components/Header";
import Code from "./components/TypeBox";

function App() {
  return (
    <div className="App">
      <Header className="flex justify-content" />
      <div className="container mx-auto mt-8 flex justify-center">
        <Code />
      </div>
    </div>
  );
}

export default App;

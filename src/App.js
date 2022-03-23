import React from "react";
import "./App.css";
import Task from "./components/Task";

const handleClick = () => {
  return <Task />;
};
function App() {
  return (
    <div className="App">
      <h1>Bored?</h1>
      <form>
        <button onClick={() => handleClick}>Here's Your Cure</button>
      </form>
      <Task />
    </div>
  );
}

export default App;

// C0usfB1TvE82xowq7FrGOp5Qq90K1rrg   api key

//make a component for when you click the get random task button

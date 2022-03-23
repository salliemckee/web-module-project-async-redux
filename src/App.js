import React from "react";
import "./App.css";
import Task from "./components/Task";
import { connect } from "react-redux";
import { getData } from "./actions";

function App() {
  return (
    <div className="App">
      <h1>Bored?</h1>
      <form>
        <button className="button">Here's Your Cure</button>
      </form>
      <Task />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, getData)(App);

//make a component for when you click the get random task button

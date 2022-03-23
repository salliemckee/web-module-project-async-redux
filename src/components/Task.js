import React from "react";
import data from "./data";
import { getData } from "../actions";
import { connect } from "react-redux";

const Task = (props) => {
  console.log(props);
  const task = data;

  return (
    <div className="task">
      <h4>May I Suggest: {props.activity}</h4>
      <p>Category: {props.type}</p>
      <p>People Needed: {props.participants}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activity: state.data.activity,
    type: state.data.type,
    participants: state.data.participants,
  };
};

export default connect(mapStateToProps)(Task);

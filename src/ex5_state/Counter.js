import React, { useState } from "react";

const Counter = () => {
  //State
  const [counter, setCounter] = useState(0);

  //Function-1
  const IncrementHandler = () => {
    setCounter(counter + 1);
  };
  //Function-2
  const DecrementHandler = () => {
    setCounter(counter - 1);
  };
  //Function-3
  const ResetHandler = () => {
    setCounter(0);

  return (
    <div className="container">
      <h3> Counter:{counter}</h3>
      <button
        type="button"
        className="btn btn-success mx-1"
        onClick={IncrementHandler}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-danger mx-1"
        onClick={DecrementHandler}
      >
        Decrement
      </button>
      <button type="button" className="btn btn-secondary mx-1"onClick={ResetHandler}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

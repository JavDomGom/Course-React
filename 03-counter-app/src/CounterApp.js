import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const handledAdd = () => {
    setCounter(counter + 1);
  };

  const handledReset = () => {
    setCounter(value);
  };

  const handledSubstract = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handledAdd}>+1</button>
      <button onClick={handledReset}>Reset</button>
      <button onClick={handledSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;

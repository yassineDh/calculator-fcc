import React from "react";
import CalculatorButton from "./CalculatorButton";
import Display from "./Display";

function CalculatorMachine() {
  const buttonValue = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
    "*",
    "/",
    "=",
  ];

  const buttonIds = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "decimal",
    "add",
    "subtract",
    "multiply",
    "divide",
    "equals",
    "clear",
  ];
  return (
    <div className="col-4" style={{ backgroundColor: "grey" }}>
      <div className="container-fluid">
        <div className="row">
          <Display />
        </div>
        <div className="row">
          {buttonIds.map((elt,i) => {
            return <CalculatorButton key={elt} buttonId={elt} buttonVal={buttonValue[i]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CalculatorMachine;

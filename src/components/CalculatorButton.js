import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayOnScreen, resetScreen,displayResult } from "../redux/actions/action";

function CalculatorButton(props) {
  let cExp = useSelector(state =>state.cleanText);
  const dispatch = useDispatch();
  let { buttonId, buttonVal } = props;
  buttonVal = buttonVal ? buttonVal : "C";

  const calculateString = (e) => {
    if (buttonVal === "C") {
      dispatch(resetScreen());
    } else if (buttonVal === "=") {
      let oRes = eval(cExp); 
      dispatch(displayResult(oRes));
    } else {
      dispatch(displayOnScreen(buttonVal));
    }
  };

  return (
    <div
      className="col-3 text-center"
      id={buttonId}
      style={{ height: "50px", paddingTop: "15px" }}
      onClick={calculateString}
    >
      {buttonVal}
    </div>
  );
}

export default CalculatorButton;

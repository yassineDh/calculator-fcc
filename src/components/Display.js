import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanExp } from "../redux/actions/action";

function Display() {
  let exp = useSelector((state) => state.editText);

  let reg1 = /[\s()*/+-]+/g;
  let reg2 = /[^\s()*/%+-]+/g;

  let nums = exp
    .split(reg1)
    .filter((elt) => elt !== "")
    .map((elt) => {
      if (elt.includes("..")) {
        return parseFloat(elt).toFixed(1);
      } else if (elt.split(".").length - 1 > 1) {
        let lelt = elt.substring(0, elt.indexOf(".") + 1);
        let relt = elt.substring(elt.indexOf(".") + 1).replaceAll(".", "");
        let newelt = lelt + relt;
        return parseFloat(newelt);
      } else {
        return parseFloat(elt);
      }
    });
  let ops = exp.split(reg2).filter((elt) => elt !== "");

  const dispatch = useDispatch();

  console.log(nums);
  console.log("before" + ops);

  let cleanOps = () => {
    ops.forEach((element) => {});

    for (let i = 0; i < ops.length; i++) {
      if (
        ops[i].length == 2 &&
        ops[i].charAt(ops[i].length - 2) === ops[i].charAt(ops[i].length - 1)
      ) {
        ops[i] = ops[i].charAt(ops[i].length - 2);
      }

      if (ops[i].length > 2) {
        if (ops[i].charAt(ops[i].length - 1) === "-") {
          ops[i] = ops[i].substring(ops[i].length - 2);
        } else {
          ops[i] = ops[i].substring(ops[i].length - 1);
        }
      }
    }
  };

  let cleanDisplay = () => {
    let positive = true;
    if (exp.charAt(0) === "-") {
      positive = false;
    }
    let nexExp = "";
    cleanOps();
    if (positive) {
      if (nums.length == ops.length) {
        for (let i = 0; i < nums.length; i++) {
          nexExp += nums[i] + ops[i];
        }
      } else {
        for (let i = 0; i < nums.length - 1; i++) {
          nexExp += nums[i] + ops[i];
        }

        nexExp += nums[nums.length - 1];
      }
    } else {
      if (nums.length == ops.length) {
        for (let i = 0; i < nums.length; i++) {
          nexExp += ops[i] + nums[i];
        }
      } else {
        for (let i = 0; i < nums.length - 1; i++) {
          nexExp += ops[i] + nums[i];
        }

        nexExp += ops[ops.length - 1];
      }
    }
    return nexExp;
  };

  useEffect(() => {
    dispatch(cleanExp(cleanDisplay()));
  });

  return (
    <div className="col-12" id="display" style={{ height: "50px" }}>
      {cleanDisplay()}
    </div>
  );
}

export default Display;

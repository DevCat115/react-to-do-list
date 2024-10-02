import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useDispatch, useSelector } from "react-redux";

function Schedules() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  return <div></div>;
}
export default Schedules;

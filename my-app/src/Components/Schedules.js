import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../Actions/addToDo";
import { deleteToDo } from "../Actions/deleteToDo";
import { enableEdit } from "../Actions/enableEdit";
import { saveChanges } from "../Actions/saveChanges";
import Schedules_sub from "./Schedules_sub";

function Schedules() {
  const { data } = useSelector((state) => state.todos);

  const [category, setCategory] = useState("All");
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    const filteredData = data.filter((value) => {
      if (category === "All") return true;
      if (category === "Done") return value.check;
      return !value.check;
    });
    setNewData(filteredData);
  }, [category, data]);

  const showAll = (evt) => {
    setCategory("All");
  };

  const showDone = (evt) => {
    setCategory("Done");
  };

  const showTodo = (evt) => {
    setCategory("Todo");
  };

  return (
    <div>
      <h1>My Schedule</h1>
      <div>
        <button className="categorybtn" onClick={showAll}>
          All
        </button>
        <button className="categorybtn" onClick={showDone}>
          Done
        </button>
        <button className="categorybtn" onClick={showTodo}>
          To Do
        </button>
      </div>
      <div className="todolist">
        {newData.map((todo, index) => (
          <Schedules_sub key={todo.content} todo={todo} index={index} />
        ))}
      </div>
    </div>
  );
}
export default Schedules;

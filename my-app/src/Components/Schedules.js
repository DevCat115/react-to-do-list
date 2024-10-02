import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Schedules() {
  const { data } = useSelector((state) => state.todos);
  // Step 2: Initialize state with content
  const [inputData, setInputData] = useState({
    content: "",
    check: false
  });

  const dispatch = useDispatch();

  // Step 3: Define the onChange handler
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInputData((prev) => ({
      ...prev,
      [name]: type==='checkbox' ? checked : value,
    })); // Update state with the input value
  };

  const editContent = event => {
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSchedule = {
      content: inputData.content,
    };
    // dispatch(addToDo(newSchedule));
  };

  const content = data.map((item) => (
    <p className="todoitem">
        <input
            id="check"
            name="check"
            type="checkbox"
            value={inputData.check}
            onChange={handleChange}
            // 'content' property can also be used here if needed
        />
      <label className="label">Content : </label>
      {item.content}
      <div>
        <button className="editbutton" onClick={editContent}>edit</button>
        <button className="deletebutton">delete</button>
      </div>
    </p>
  ));
  return (
    <div>
      <h1>My Schedule</h1>
      <div className="todolist">{content}</div>
    </div>
  );
}
export default Schedules;

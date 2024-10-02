import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../Actions/addToDo";
import { deleteToDo } from "../Actions/deleteToDo";

function Schedules() {
  const { data } = useSelector((state) => state.todos);
  // Step 2: Initialize state with content
  const [inputData, setInputData] = useState({
    content: "",
    isEditing: false,
    check: false,
  });

  const dispatch = useDispatch();

  // Step 3: Define the onChange handler
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInputData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    })); // Update state with the input value
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSchedule = {
      content: inputData.content,
      isEditing: inputData.isEditing,
      check: inputData.check,
    };
    dispatch(addToDo(newSchedule));
  };

  const editToDo = index => {
    
  }

  const content = data.map((item, index) => (
    <p className="todoitem" key={index}>
      <input
        id="check"
        name="check"
        type="checkbox"
        value={item.check}
        onChange={handleChange}
        // 'content' property can also be used here if needed
      />
      <label className="label">Content : </label>
      {inputData.isEditing ? (
        <input
          id="content"
          name="content"
          type="text"
          value={item.content}
          onChange={handleChange}
          // 'content' property can also be used here if needed
        />
      ) : (
        <input
          id="content"
          name="content"
          type="text"
          value={item.content}
          onChange={handleChange}
          disabled
          // 'content' property can also be used here if needed
        />
      )}

      <div>
        <button className="editbutton" onClick={(e) => editToDo(index)}>edit</button>
        <button className="deletebutton" onClick={(e) => dispatch(deleteToDo(index))}>
          delete
        </button>
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

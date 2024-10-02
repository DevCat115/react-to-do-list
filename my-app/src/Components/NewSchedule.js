import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../Actions/addToDo";

const NewSchedule = () => {
  // Step 2: Initialize state with content
  const [inputData, setInputData] = useState({
    content: "",
    isEditing: false,
    check: false,
  });

  const dispatch = useDispatch();

  // Step 3: Define the onChange handler
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
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
    setInputData({
        content: '',
        isEditing: false,
        check: false
    })
  };

  return (
    <div>
      <h1>New Schedule</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="content">Content : </label>
        {/* Step 4: Attach the onChange handler */}
        <input
          id="content"
          name="content"
          type="text"
          value={inputData.content}
          onChange={handleChange}
          // 'content' property can also be used here if needed
        />
        <br />
        <br />
        <button type="submit" className="savebutton">
          save
        </button>
      </form>
    </div>
  );
};

export default NewSchedule;

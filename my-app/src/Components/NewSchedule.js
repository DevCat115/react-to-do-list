import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToDo } from '../Actions'

const NewSchedule = () => {
  // Step 2: Initialize state with content
  const [inputData, setInputData] = useState({
    content: ''
  });

  const dispatch = useDispatch();

  // Step 3: Define the onChange handler
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setInputData(prev => ({
        ...prev,
        [name] : type === 'checkbox' ? checked: value
    })); // Update state with the input value
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newSchedule = {
        content: inputData.content,
        check: inputData.check
    }
    dispatch(addToDo(newSchedule));
  }

  return (
    <div>
      <h1>New Schedule</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="content">Content : </label>
        {/* Step 4: Attach the onChange handler */}
        <input
            id="content"
            name='content'
            type="text"
            value={inputData.content}
            onChange={handleChange}
            // 'content' property can also be used here if needed
        /><br/><br/>
        <button type='submit'>save</button>
      </form>
    </div>
  );
};

export default NewSchedule;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../Actions/addToDo";
import { deleteToDo } from "../Actions/deleteToDo";
import { enableEdit } from "../Actions/enableEdit";
import { saveChanges } from "../Actions/saveChanges";

function Schedules_sub({ todo, index }) {
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({
    content: todo.content,
    isEditing: todo.isEditing,
    check: todo.check,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInputData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    })); // Update state with the input value
  };

  return (
    <div className="todoitem">
      <input
        id="check"
        name="check"
        type="checkbox"
        value={inputData.check}
        onChange={handleChange}
        // 'content' property can also be used here if needed
      />
      <label className="label">Content : </label>
      {!todo.isEditing ? (
        todo.content
      ) : (
        <input
          id="content"
          name="content"
          type="text"
          value={inputData.content}
          onChange={handleChange}
          // 'content' property can also be used here if needed
        />
      )}
      <div>
        {todo.isEditing ? (
          <button
            className="savebutton"
            onClick={(e) =>
              dispatch(saveChanges(index, inputData.content, inputData.check))
            }
          >
            save
          </button>
        ) : null}
        {!todo.isEditing ? (
          <button
            className="editbutton"
            onClick={(e) => dispatch(enableEdit(index))}
          >
            edit
          </button>
        ) : null}
        <button
          className="deletebutton"
          onClick={(e) => dispatch(deleteToDo(index))}
        >
          delete
        </button>
      </div>
    </div>
  );
}
export default Schedules_sub;

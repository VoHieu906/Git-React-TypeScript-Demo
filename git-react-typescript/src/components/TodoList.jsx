import React, { useState } from "react";

function TodoList() {
  const [cv, setCV] = useState("");
  const [ds, setDS] = useState([]);
  const newcv = (e) => {
    setCV(e.target.value);
  };
  const addToList = () => {
    setDS([...ds, cv]);
    setCV("");
  };
  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={cv}
        onChange={newcv}
        placeholder="Nhập công việc"
      />
      <button onClick={addToList}>Thêm vào danh sách</button>
      {ds.map((dscon, index) => (
        <p key={index}>{dscon}</p>
      ))}
    </div>
  );
}

export default TodoList;

import { useState } from "react";

import "./App.css";

function App() {
  const [cv, setCv] = useState("");
  const [ds, setDs] = useState([]);
  const addToList = () => {
    setDs([...ds, cv]);
    setCv("");
  };
  const newcv = (e) => {
    setCv(e.target.value);
  };
  return (
    <>
      <h2>Việc cần làm:</h2>
      <input
        type="text"
        onChange={newcv}
        value={cv}
        placeholder="Nhập công việc"
      />
      <button onClick={addToList}>Thêm</button>
      {ds.map((dscon, index) => (
        <div key={index}> {dscon}</div>
      ))}
    </>
  );
}

export default App;

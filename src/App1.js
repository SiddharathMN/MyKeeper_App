import React, { useState } from "react";

function App() {
  const [ran, setRan] = useState("");
  const [arr, setArr] = useState([]);

  function readItem(event) {
    const input = event.target.value;
    setRan(input);
  }

  function addItem() {
    setArr((prevValue) => [...prevValue, ran]);
    setRan(""); // Clear input after adding
  }

  function deleteItem(index) {
    setArr((prevValue) => prevValue.filter((_, ind) => ind !== index));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Daily Plan</h1>
      </div>
      <div className="form">
        <input type="text" value={ran} onChange={readItem} placeholder="Add a new task" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <ul className="task-list">
        {arr.map((item, index) => (
          <li key={index} onClick={() => deleteItem(index)} className="task-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


import React, { useState } from "react";
import Row from "./components/Row";
import "./App.css";

const App = () => {
  const [rows, setRows] = useState([
    { id: 1, value: 100, sign: "+", enabled: true },
    { id: 2, value: 30, sign: "+", enabled: true },
    { id: 3, value: 7, sign: "-", enabled: true },
  ]);

  const addRow = () => {
    const newRow = { id: Date.now(), value: 0, sign: "+", enabled: true };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const toggleRow = (id) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, enabled: !row.enabled } : row
      )
    );
  };

  const handleValueChange = (id, value) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, value } : row)));
  };

  const handleSignChange = (id, sign) => {
    setRows(rows.map((row) => (row.id === id ? { ...row, sign } : row)));
  };

  const calculateTotal = () => {
    return rows.reduce((total, row) => {
      if (row.enabled) {
        return row.sign === "+" ? total + row.value : total - row.value;
      }
      return total;
    }, 0);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <button onClick={addRow}>Add Row</button>
      <ul>
        {rows.map((row) => (
          <Row
            key={row.id}
            id={row.id}
            row={row}
            handleValueChange={handleValueChange}
            handleSignChange={handleSignChange}
            handleDelete={deleteRow}
            handleToggle={toggleRow}
          />
        ))}
      </ul>
      <div className="result">
        <strong>Result: {calculateTotal()}</strong>
      </div>
    </div>
  );
};

export default App;

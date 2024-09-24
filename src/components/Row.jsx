import React from "react";

const Row = ({
  id,
  row,
  handleValueChange,
  handleSignChange,
  handleDelete,
  handleToggle,
}) => {
  return (
    <li style={{ opacity: row.enabled ? 1 : 0.5 }}>
      <select
        value={row.sign}
        onChange={(e) => handleSignChange(id, e.target.value)}
        disabled={!row.enabled}
      >
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
      <input
        type="number"
        value={row.value}
        onChange={(e) => handleValueChange(id, parseFloat(e.target.value) || 0)}
        disabled={!row.enabled}
      />
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={() => handleToggle(id)}>
        {row.enabled ? "Disable" : "Enable"}
      </button>
    </li>
  );
};

export default Row;

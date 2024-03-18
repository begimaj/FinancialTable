import React, { useState } from "react";
import "../pages/index.css";

const AddTransction = ({ addTransaction }) => {
  const [type, setType] = useState("expense");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString();
    addTransaction({ type, description, amount, date: currentDate });
    setDescription("");
    setAmount(0);
  };
  return (
    <div className="Add-box">
      <form className="Add-box-form" onSubmit={handleSubmit}>
        <select
          style={{ width: "100px", height: "30px", borderRadius: "3px" }}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <input
          style={{ width: "260px", height: "25px" }}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          style={{ width: "260px", height: "25px" }}
          type="number"
          value={amount}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (!isNaN(value)) {
              setAmount(value);
            } else {
              setAmount(0);
            }
          }}
          placeholder="Amount"
        />

        <button className="Add-box-button" onClick={handleSubmit} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
export default AddTransction;

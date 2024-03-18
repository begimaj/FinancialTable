import React from "react";

const FinancialTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{display:'flex',alignItems:"center",justifyContent:'center',flexDirection:"column",gap:"10px",fontSize:"26px"}}>
      <h2 style={{textShadow: " 5px 5px 4px  blue",color:"white"}}>Financial Table</h2>
      <table 
      // style={{tableLayout: "fixed"}}
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;

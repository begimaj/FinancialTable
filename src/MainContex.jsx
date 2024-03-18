import React from "react";
import { Route, Routes } from "react-router-dom";
import { useProducts } from "./Context";
import AddTransction from "./components/pages/AddTransction";
import FinancialTable from "./components/pages/FinancialTable";

const MainContext = () => {
  const { data, setData } = useProducts();

  const addTransaction = (transactionData) => {
    setData([...data, transactionData]);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/AddTransction"
          element={<AddTransction addTransaction={addTransaction} />}
        />
        <Route
          path="/FinancialTable"
          element={<FinancialTable data={data} />}
        />
      </Routes>
    </div>
  );
};

export default MainContext;

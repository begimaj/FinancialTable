import React from "react";
import { useProducts } from "../../Context";
import FinancialTable from "./FinancialTable";
export default function FinancilTableCard() {
  const { data } = useProducts();
  return (
    <div>
      <div>
        {data.map((menu, index) => (
          <FinancialTable
            key={index}
            type={menu.type}
            description={menu.description}
            amount={menu.amount}
            date={menu.date}
          />
        ))}{" "}
      </div>
    </div>
  );
}

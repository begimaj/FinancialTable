import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="box">
      <Link to="/FinancialTable">FinancialTable</Link>
      <Link to="/AddTransction">AddTransction</Link>
    </div>
  );
};

export default Header;

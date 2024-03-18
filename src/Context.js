import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const useProducts = () => useContext(Context);

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
  );
};

export default ContextProvider;

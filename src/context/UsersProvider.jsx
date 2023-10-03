import axios from "axios";
import React, { createContext } from "react";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const deleteUsers = async (ids) => {
    ids.map(async (item) => {
      await axios.delete(`http://localhost:8080/users/${item}`);
    });
  };
  const providerValue = {
    deleteUsers,
  };
  return (
    <UsersContext.Provider value={providerValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

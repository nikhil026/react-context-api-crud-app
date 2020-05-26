import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  employees: [
    {
      id: 1,
      name: "Ishan Manandhar",
      location: "Mumbai",
      designation: "Frontend Developer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlmmHZ5z8nNLMO8bpyh6KBdfUXXVcUErVqrFYP6oPWViV12m1B&usqp=CAU"
    },
    {
      id: 2,
      name: "Sachin Agrawal",
      location: "Delhi",
      designation: "Backend Developer",
      image: "https://tailwindcss.com/img/card-left.jpg"
    },

  ]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
    });
  }

  function addEmployee(employees) {
    dispatch({
      type: "ADD_EMPLOYEES",
      payload: employees
    });
  }

  function editEmployee(employees) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employees
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        removeEmployee,
        addEmployee,
        editEmployee
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
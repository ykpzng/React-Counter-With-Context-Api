import React, { useReducer } from "react";
import { reducer } from './reducer'
import MyContext, { initialState } from "./store";

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider >
  )
}

export default Provider;
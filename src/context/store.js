import { createContext } from "react";

export const initialState = {
  counter: 0,
}

const MyContext = createContext(initialState);

export default MyContext;
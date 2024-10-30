import React, { createContext, useReducer, useContext } from "react";

// Initial State
const initialState = {
  url: "",
  result: null,
  isLoading: false,
  error: null,
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_URL":
      return { ...state, url: action.payload };
    case "SET_RESULT":
      return { ...state, result: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

// Create Context
const AppContext = createContext(initialState);

// Hook to use context
export const useAppContext = () => useContext(AppContext);

// Context Provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

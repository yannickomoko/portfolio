import { createContext, useContext, useReducer } from "react";
const appContext = createContext();

export function ContextProvider({ children }) {
  const context = useContextProvider();
  return <appContext.Provider value={context}>{children}</appContext.Provider>;
}

export function useCtx() {
  return useContext(appContext);
}

function useContextProvider() {
  const reducer = (prevState, action) => ({ ...prevState, ...action });
  const [state, dispatch] = useReducer(reducer, {});
  return {
    state,
    dispatch,
  };
}

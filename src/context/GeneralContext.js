import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

//* Create a Context
const GeneralContext = createContext();

//* Configure GeneralContext
export function GeneralProvider({ children }) {
  const value = {};

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}

//* Create Custom Hook- useGeneral
export default function useGeneral() {
  return useContext(GeneralContext);
}

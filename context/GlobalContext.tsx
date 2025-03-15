"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface GlobalState {
  showBooking: boolean;
  setShowBooking: any;
}

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <GlobalContext.Provider value={{ showBooking, setShowBooking }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

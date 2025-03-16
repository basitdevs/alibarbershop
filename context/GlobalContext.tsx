"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface GlobalState {
  showBooking: boolean;
  setShowBooking: any;
  toggleBooking: any;
}

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [showBooking, setShowBooking] = useState(false);
  const toggleBooking = () => {
    setShowBooking((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "auto";
      return newState;
    });
  };

  return (
    <GlobalContext.Provider
      value={{ showBooking, setShowBooking, toggleBooking }}
    >
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

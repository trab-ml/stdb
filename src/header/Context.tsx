import { createContext } from "react";

export const selectedNavIsHomeContext = createContext<{
    selectedNavIsHome: boolean;
    setSelectedNavIsHome: React.Dispatch<React.SetStateAction<boolean>>;
  }>({
    selectedNavIsHome: false,
    setSelectedNavIsHome: () => {},
  });
  
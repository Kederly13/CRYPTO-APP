import { createContext, ReactNode, useMemo, useState } from "react";

export type TThemeContext = {
  theme: string;
  changeTheme: () => void;
}

export const ThemeContext = createContext<TThemeContext | null>(null);

export const ThemeContextProvider = ({ children }: {children: React.ReactNode}) => { 
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light")); 
   
  };

  const contextValues = useMemo(
    () => ({ theme, changeTheme }), 
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValues}> 
      {children}
    </ThemeContext.Provider>
  );
};

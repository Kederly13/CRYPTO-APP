import { THEME } from "constants/theme"
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

interface IUseTheme { 
    toggleTheme: (theme: THEME) => void;
    theme: THEME
};

export const useTheme = (): IUseTheme => {
 const { theme, setTheme } = useContext(ThemeContext);

 const toggleTheme = (theme: THEME) => {
    let newTheme: THEME = THEME.DARK;

    if (theme === THEME.DARK) {
        newTheme = THEME.LIGHT;
    }

    if (theme === THEME.LIGHT) {
        newTheme = THEME.DARK;
    }

    setTheme?.(newTheme);
 }
 
    return {
        theme: theme || THEME.DARK,
        toggleTheme
    }
};
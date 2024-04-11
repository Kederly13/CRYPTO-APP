import { createContext } from "react";
import { THEME } from "constants/theme";

interface IThemeContextProps {
    theme?: THEME
    setTheme?: (theme: THEME) => void
};

export const ThemeContext = createContext<IThemeContextProps>({});
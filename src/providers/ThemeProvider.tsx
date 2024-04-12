import { useEffect, useMemo, useState, ReactNode, FC } from "react";
import { ThemeProvider as ThemeProviderSC } from "styled-components";

import { THEME } from "constants/theme";
import { themes } from "styles/themes";
import { LOCAL_STORAGE_KEY } from "constants/theme";

import { ThemeContext } from "context/ThemeContext";

interface IThemeProviderProps {
    initialTheme?: THEME,
    children: ReactNode
};

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_KEY.THEME) as THEME;

export const ThemeProvider: FC<IThemeProviderProps> = ({ initialTheme, children }) => {
    const [isThemeInited, setThemeInited] = useState<boolean>(false);
    const [theme, setTheme] = useState<THEME>(initialTheme || fallbackTheme || THEME.DARK);

    useEffect(() => {
        if (!isThemeInited && initialTheme) {
            setTheme(initialTheme);
            setThemeInited(true);
        }

    }, [initialTheme, isThemeInited]);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY.THEME, theme)
    }, [theme]);

    const defaultProps = useMemo(() => ({
        theme, setTheme
    }), [theme])
    
    return (
        <ThemeContext.Provider value={defaultProps}>
            <ThemeProviderSC theme={theme === THEME.DARK ? themes[THEME.DARK] : themes[THEME.LIGHT]}>
                {children}
            </ThemeProviderSC>
        </ThemeContext.Provider>
    )
};
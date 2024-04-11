import { ThemeProvider, ThemeContext } from 'styled-components';
import { useContext, useState, useEffect } from 'react';

import { TThemeContext } from 'ThemeContextProvider/ThemeContextProvider';

type Theme = {
    color: string,
    backgroundColor: string;
};

type ThemeProps = {
    children: React.ReactNode;
};

const themeLight: Theme = {
    color: '#000',
    backgroundColor: '#fff'
};
  
const themeDark: Theme = {
    color: '#fff',
    backgroundColor: '#1E1932'
};

export const Theme = ({ children }: ThemeProps) => {
    const context = useContext(ThemeContext);

    // Если контекст не установлен, используем значение по умолчанию
    const { theme } = context || { theme: "light" };
    console.log(theme)
    return (
        <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
            {children}
       </ThemeProvider>
    );
};

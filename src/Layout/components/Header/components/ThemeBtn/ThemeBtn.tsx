import { useContext } from 'react';

import { ThemeContext } from 'ThemeContextProvider/ThemeContextProvider';

import { TThemeContext } from 'ThemeContextProvider/ThemeContextProvider';

import { Button } from 'components/Button';
import { Sun } from 'assets/svg/sun';

export const ThemeBtn = () => {
    const { changeTheme } = useContext(ThemeContext) as TThemeContext;

    return (
        <Button type="button" disabled={false} $padding='11px' $backgroundcolor='#191926' onClick={changeTheme}>
            <Sun />
        </Button> 
    )
};
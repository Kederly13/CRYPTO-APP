import { useContext } from 'react';

import { ThemeContext } from 'ContextProvider/ContextProvider';

import { TThemeContext } from 'ContextProvider/ContextProvider';

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
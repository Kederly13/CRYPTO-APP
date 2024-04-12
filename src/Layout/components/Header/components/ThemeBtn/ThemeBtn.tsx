import { useTheme } from 'hooks/useTheme';

import { Button } from 'components/Button';
import { StyledThemeBtn } from './StyledThemeBtn';
import { Sun } from 'assets/svg/sun';

export const ThemeBtn = () => {
    const { toggleTheme, theme } = useTheme();

    const handleClick = () => {
        toggleTheme(theme);
    };

    return (
        <StyledThemeBtn type="button" onClick={handleClick}>
            <Sun />
        </StyledThemeBtn> 
    )
};
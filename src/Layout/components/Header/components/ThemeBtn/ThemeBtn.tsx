import { useTheme } from 'hooks/useTheme';

import { Button } from 'components/Button';

import { StyledThemeBtn, StyledSun } from './StyledThemeBtn';

import { ReactComponent as Moon} from 'assets/svg/moon.svg';


export const ThemeBtn = () => {
    const { toggleTheme, theme } = useTheme();
    console.log(theme)
    const handleClick = () => {
        toggleTheme(theme);
    };

    return (
        <StyledThemeBtn type="button" onClick={handleClick}>
            {theme === 'dark' ? (
                <StyledSun />
            ) : (
                <Moon />
            )}
            
        </StyledThemeBtn> 
    )
};
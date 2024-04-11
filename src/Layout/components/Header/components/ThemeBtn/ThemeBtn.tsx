import { useTheme } from 'hooks/useTheme';

import { Button } from 'components/Button';
import { Sun } from 'assets/svg/sun';

export const ThemeBtn = () => {
    const { toggleTheme, theme } = useTheme();

    const handleClick = () => {
        toggleTheme(theme);
    };

    return (
        <Button type="button" disabled={false} $padding='11px' $backgroundcolor='#191926' onClick={handleClick}>
            <Sun />
        </Button> 
    )
};
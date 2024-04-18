import { FC } from 'react';

import { Button } from 'components/Button';
import { StyledSwitch } from './StyledSwitch';

interface IHomeSwitch {
    onClick: (value: string) => void;
    activeSection: string;
};

export const HomeSwitch: FC<IHomeSwitch>= ({ onClick, activeSection }) => {
    return (
        <StyledSwitch>
            <Button type='button'  active={activeSection === 'Coins' && true} $maxWidth='244px' onClick={() => onClick('Coins')}>
                <span>Coins</span>
            </Button>
            <Button type='button' active={activeSection === 'Convertor' && true} $maxWidth='244px' onClick={() => onClick('Convertor')}>
                <span>Convertor</span>
            </Button>
        </StyledSwitch>
    )
}
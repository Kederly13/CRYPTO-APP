import { Button } from 'components/Button';
import { StyledSwitch } from './StyledSwitch';

export const HomeSwitch = () => {
    return (
        <StyledSwitch>
            <Button type='button' disabled={true} maxWidth='244px'>
                <span>Coins</span>
            </Button>
            <Button type='button' disabled={true} maxWidth='244px'>
                <span>Convertor</span>
            </Button>
        </StyledSwitch>
    )
}
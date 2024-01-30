import { Button } from 'components/Button';
import { StyledSwitch } from './StyledSwitch';

export const Switch = () => {
    return (
        <StyledSwitch>
            <Button type='button' disabled={true}>
                <span>Coins</span>
            </Button>
            <Button type='button' disabled={true}>
                <span>Convertor</span>
            </Button>
        </StyledSwitch>
    )
}
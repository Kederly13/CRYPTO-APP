import { ReactComponent as SpinnerLoader } from 'assets/svg/spinner.svg';

import { StyledSpinnerWrapper } from './StyledSpinner';

export const Spinner = () => (
    <StyledSpinnerWrapper>
        <SpinnerLoader />
    </StyledSpinnerWrapper>
)
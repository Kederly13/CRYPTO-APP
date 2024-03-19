import { StyledCoinTableRow } from './StyledCoinTableRow';
import { CoinNameCol } from './components/CoinNameCol';
import { CoinPriceCol } from './components/CoinPriceСol';

import { ICoinNameProps } from './components/CoinNameCol/CoinNameCol';

export const CoinTableRow = ({}) => {
    return (
        <StyledCoinTableRow>
            <CoinNameCol {coinName} {coinLogo} {coinSymbol}>
                {coinName}
                {coinLogo}
                {coinSymbol}
            </CoinNameCol>
            <CoinPriceCol></CoinPriceCol>
        </StyledCoinTableRow>
    )
}
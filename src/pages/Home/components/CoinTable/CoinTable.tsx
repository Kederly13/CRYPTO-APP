import { CoinTableBody } from './components/CoinTableBody';

import { StyledCoinTable } from './StyledCoinTable';
import { CoinTableHead } from './components/CoinTableHead';


export const CoinTable = () => {
    return (
        <StyledCoinTable>
            <CoinTableHead />
            <CoinTableBody />
        </StyledCoinTable>
    )
}
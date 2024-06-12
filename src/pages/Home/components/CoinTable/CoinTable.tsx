import { CoinTableBody } from './components/CoinTableBody';
import { CoinTableHead } from './components/CoinTableHead';

import { StyledCoinTable, StyledTableContainer } from './StyledCoinTable';

export const CoinTable = () => (
    <StyledTableContainer>
        <StyledCoinTable>
            <CoinTableHead />
            <CoinTableBody />
        </StyledCoinTable>
    </StyledTableContainer>
);
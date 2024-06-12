import { CoinTableBody } from './components/CoinTableBody';

import { StyledCoinTable, StyledTableContainer } from './StyledCoinTable';
import { CoinTableHead } from './components/CoinTableHead';

export const CoinTable = () => (
    <StyledTableContainer>
        <StyledCoinTable>
            <CoinTableHead />
            <CoinTableBody />
        </StyledCoinTable>
    </StyledTableContainer>
);
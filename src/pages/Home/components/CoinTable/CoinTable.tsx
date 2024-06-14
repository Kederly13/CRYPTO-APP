import { useEffect, useState } from 'react';
import { CoinTableBody } from './components/CoinTableBody';
import { CoinTableHead } from './components/CoinTableHead';
import { useAppSelector } from 'hooks/reduxHooks';
import { selectCoinList } from 'store/slices/coinsSlice/coinsSlice';
import { ICoin } from 'types/coinType';
import { StyledCoinTable, StyledTableContainer } from './StyledCoinTable';

// Enum for sort direction
enum SortDirection {
    Ascending = 'ascending',
    Descending = 'descending',
};

export const CoinTable = () => {
    const coins = useAppSelector(selectCoinList);
    const [sortedCoins, setSortedCoins] = useState<ICoin[]>(coins);
    const [sortConfig, setSortConfig] = useState<{ key: keyof ICoin, direction: SortDirection }>({ key: 'name', direction: SortDirection.Ascending });
    console.log(coins);
    console.log(sortedCoins);
    console.log(sortConfig)

    
    const handleSort = (sortKey: keyof ICoin) => {
        let direction = SortDirection.Ascending;

        if (sortConfig.key === sortKey && sortConfig.direction === SortDirection.Ascending) {
            direction = SortDirection.Descending;
        }
        setSortConfig({ key: sortKey, direction });

        const sorted: ICoin[] = [...sortedCoins].sort((a, b) => {
            if (direction === SortDirection.Ascending) {
                return a[sortKey] < b[sortKey] ? -1 : 1;
            } else {
                return a[sortKey] > b[sortKey] ? -1 : 1;
            }
        });

        setSortedCoins(sorted);
    };

    // useEffect(() => {
    //     if (coins?.length) {
    //         setSortedCoins(coins)
    //     }
    // }, [coins])

    return (
        <StyledTableContainer>
            <StyledCoinTable>
                <CoinTableHead onSort={handleSort} sortConfig={sortConfig} />
                <CoinTableBody coins={coins} />
            </StyledCoinTable>
        </StyledTableContainer>
    );
};

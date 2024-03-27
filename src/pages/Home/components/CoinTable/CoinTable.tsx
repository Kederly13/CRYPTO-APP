import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useAppSelector } from 'hooks/reduxHooks';
import { CoinTableBody } from './components/CoinTableBody';

import { selectCoinList } from 'store/slices/coinSlice';
import { StyledCoinTable } from './StyledCoinTable';
import { CoinTableHead } from './components/CoinTableHead';


export const CoinTable = () => {
    const coins = useAppSelector(selectCoinList);

    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const pageSize = 10;

    const fetchMoreData = () => {
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;
        const newData = coins.slice(startIndex, endIndex);
        setPage(page + 1);
        setHasMore(newData.length > 0);
    };

    return (
        <>
        
        <StyledCoinTable>
            <CoinTableHead />
            <CoinTableBody />
        </StyledCoinTable>
        </>
        
    );
};
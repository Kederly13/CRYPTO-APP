import { FC, useRef } from 'react';
import { Link } from 'react-router-dom'; 

import { useOutsideClick } from 'hooks/useOutsideClick';

import { getCapitalizedWord } from 'utils/getCapitalizedWord';

import { ICoin } from 'types/coinType';

import { StyledSearchList, StyledSearchListItem } from './StyledSearchList';

interface SearchListProps {
    coins: ICoin[];
    searchQuery?: string,
    handleActiveMenu: () => void;
};

export const SearchList: FC<SearchListProps> = ({ coins, searchQuery, handleActiveMenu }) => {
    const coinsNames = coins.map(coin => coin.id);
    const ref = useRef<HTMLLIElement>(null);
    let filteredCoins: string[] = [];

    if (searchQuery) {
        filteredCoins = coinsNames.filter(name => 
            name.toLowerCase().includes(searchQuery?.toLocaleLowerCase() || '')
        )
    } 

    useOutsideClick(ref, handleActiveMenu);

    const coinsToRender = filteredCoins.length > 0 ? filteredCoins : coinsNames;

    return (
        <StyledSearchList>
            {coinsToRender.map((coin) => (
                <StyledSearchListItem key={coin} ref={ref}>
                    <Link to={`/coin-page/${coin.toLowerCase()}`}>
                        {getCapitalizedWord(coin)}
                    </Link>
                </StyledSearchListItem>
            ))}
        </StyledSearchList>
    )
};
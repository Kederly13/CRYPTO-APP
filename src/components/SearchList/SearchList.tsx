import { FC, useRef } from 'react';
import { Link } from 'react-router-dom'; 

import { useOutsideClick } from 'hooks/useOutsideClick';

import { getCapitalizedWord } from 'utils/getCapitalizedWord';

import { ICoin } from 'types/coinType';

import { StyledSearchList, StyledSearchListItem } from './StyledSearchList';

interface SearchListProps {
    coins: ICoin[];
    searchQuery?: string,
    handleActiveMenu?: () => void;
    isLink: boolean;
    maxHeight?: string;
};

export const SearchList: FC<SearchListProps> = ({ coins, isLink, searchQuery, handleActiveMenu, maxHeight  }) => {
    const coinsNames = coins.map(coin => coin.id);
    const ref = useRef<HTMLLIElement>(null);
    let filteredCoins: string[] = [];

    if (searchQuery) {
        filteredCoins = coinsNames.filter(name => 
            name.toLowerCase().includes(searchQuery?.toLocaleLowerCase() || '')
        )
    } 

    useOutsideClick(ref, handleActiveMenu || (() => {}));

    

    const coinsToRender = filteredCoins.length > 0 ? filteredCoins : coinsNames;

    return (
        <StyledSearchList maxHeight={maxHeight}>
            {coinsToRender.map((coin) => (
                <StyledSearchListItem key={coin} ref={ref}>
                    {isLink ? (
                        <Link to={`/coin-page/${coin.toLowerCase()}`}>
                            {getCapitalizedWord(coin)}
                        </Link>
                    ) : (
                        getCapitalizedWord(coin)
                    )}
                </StyledSearchListItem>
            ))}
        </StyledSearchList>
    )
};
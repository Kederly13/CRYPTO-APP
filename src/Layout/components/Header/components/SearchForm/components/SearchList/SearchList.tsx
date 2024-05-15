import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICoin } from 'types/coinType';
import { StyledSearchList, StyledSearchListItem } from './StyledSearchList';

interface SearchListProps {
    coins: ICoin[];
    searchQuery?: string
};

export const SearchList: FC<SearchListProps> = ({ coins, searchQuery }) => {
    const coinsNames = coins.map(coin => coin.id);
    let filteredCoins: string[] = [];

    if (searchQuery) {
        filteredCoins = coinsNames.filter(name => 
            name.toLowerCase().includes(searchQuery?.toLocaleLowerCase() || '')
        )
    }

    return (
        <StyledSearchList>
            {filteredCoins.length > 0 && filteredCoins.map((coin) => (
                <StyledSearchListItem key={coin}>
                    <Link to={`/coin-page/${coin.toLowerCase()}`}>
                        {coin}
                    </Link>
                </StyledSearchListItem>
            ))}
        </StyledSearchList>
    )
}
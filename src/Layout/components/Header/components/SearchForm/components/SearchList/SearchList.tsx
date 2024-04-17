import { FC } from 'react';
import { ICoin } from 'types/coinType';
import { StyledSearchList } from './StyledSearchList';

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

    console.log(searchQuery)
    return (
        <StyledSearchList>
            {filteredCoins.length > 0 && filteredCoins.map((coin, index) => (
                <li>{coin}</li>
            ))}
        </StyledSearchList>
    )
}
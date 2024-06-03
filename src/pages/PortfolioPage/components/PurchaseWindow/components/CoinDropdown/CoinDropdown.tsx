import { FC, useRef } from 'react';
import { useOutsideClick } from 'hooks/useOutsideClick';

import { getCapitalizedWord } from 'utils/getCapitalizedWord';

import { ICoin } from 'types/coinType';

import { StyledCoinDropdown, StyledDropdownItem } from './StyledCoinDropdown';

interface ICoinDropdownProps {
    coins: ICoin[];
    searchQuery?: string,
    handleActiveMenu: () => void;
    handleCoinSelect: (coinName: string) => void;
};

export const CoinDropdown: FC<ICoinDropdownProps> = ({ coins, searchQuery, handleActiveMenu, handleCoinSelect }) => {
    const coinsNames = coins.map(coin => coin.id);
    const ref = useRef<HTMLLIElement>(null);
    let filteredCoins: string[] = [];

    if (searchQuery) {
        filteredCoins = coinsNames.filter(name => 
            name.toLowerCase().includes(searchQuery?.toLocaleLowerCase() || '')
        )
    }; 

    useOutsideClick(ref, handleActiveMenu);

    const coinsToRender = filteredCoins.length > 0 ? filteredCoins : coinsNames;

    return (
        <StyledCoinDropdown>
            {coinsToRender.map((coin) => (
                <StyledDropdownItem key={coin} ref={ref}>
                    <button type='button' onClick={() => handleCoinSelect(coin)}>
                        {getCapitalizedWord(coin)}
                    </button>
                </StyledDropdownItem>
            ))}
        </StyledCoinDropdown>
    )
};
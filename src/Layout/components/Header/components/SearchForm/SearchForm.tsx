import { useState, ChangeEvent } from 'react';

import { StyledSearchForm, StyledSearchIcon } from './StyledSearchForm';
import { Input } from 'components/Input';
import { SearchList } from 'components/SearchList';

import { useAppSelector } from 'hooks/reduxHooks';
import { selectCoinList } from 'store/slices/coinsSlice/coinsSlice';

import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
// import {search as SearchIcon} frogdasdm './logo.svg';

export const SearchForm: React.FC = () => {
    const coinsList = useAppSelector(selectCoinList)
    
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isActiveMenu, setActiveMenu] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setActiveMenu(true);
        setSearchQuery(value);
    };

    const handleActiveMenu = () => {
        setActiveMenu(!isActiveMenu);
    };

    return (
        <StyledSearchForm>
            <div>
            <StyledSearchIcon />
                <Input
                    type='search'
                    placeholder='Search...'
                    value={searchQuery}
                    onChange={handleChange}
                />
            </div>
            {isActiveMenu && (
                <SearchList
                    coins={coinsList}
                    searchQuery={searchQuery}
                    handleActiveMenu={handleActiveMenu} 
                />
            )}
        </StyledSearchForm>
    );
};
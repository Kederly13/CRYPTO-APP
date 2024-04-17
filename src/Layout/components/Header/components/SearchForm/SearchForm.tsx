import { useState, ChangeEvent } from 'react';

import { StyledSearchForm } from './StyledSearchForm';
import { Input } from 'components/Input';
import { SearchList } from './components/SearchList';

import { useAppSelector } from 'hooks/reduxHooks';
import { selectCoinList } from 'store/slices/coinsSlice/coinSlice';


import SearchIcon from 'assets/svg/search.svg';
// import {search as SearchIcon} frogdasdm './logo.svg';

export const SearchForm: React.FC = () => {
    const coinsList = useAppSelector(selectCoinList)
    
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchQuery(value);
    };

    return (
        <StyledSearchForm>
            <div>
                <img src={SearchIcon} alt='Search' />
                <Input
                    type='search'
                    placeholder='Search...'
                    value={searchQuery}
                    onChange={handleChange}
                />
            </div>
            {searchQuery !== '' && (
                <SearchList
                    coins={coinsList}
                    searchQuery={searchQuery} 
                />
            )}
        </StyledSearchForm>
    );
};
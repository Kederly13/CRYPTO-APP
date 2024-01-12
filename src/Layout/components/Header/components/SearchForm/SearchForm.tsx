import { useState, ChangeEvent } from 'react';

import { StyledSearchForm } from './StyledSearchForm';
import { Input } from 'components/Input';
import SearchIcon from 'assets/svg/search.svg';
// import {search as SearchIcon} frogdasdm './logo.svg';

export const SearchForm: React.FC = () => {
    const [coin, setCoin] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setCoin(value);
    };

    return (
        <StyledSearchForm>
            <div>
                  <button type='submit' >
                        <img src={SearchIcon} alt='Search' />
                  </button>
                  <Input
                    type='search'
                    placeholder='Search...'
                    value={coin}
                    onChange={handleChange}
                  />
            </div>
        </StyledSearchForm>
    );
};
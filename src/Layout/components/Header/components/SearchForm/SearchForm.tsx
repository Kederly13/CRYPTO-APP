import { useState } from 'react';

import { StyledSearchForm } from './StyledSearchForm';
import { Input } from 'components/Input';
import SearchIcon from 'assets/svg/search.svg';
// import {search as SearchIcon} from './logo.svg';

export const SearchForm: React.FC = () => {

    const [coin, setCoin] = useState<string>('');
    const handleChange = () => {};
    return (
        <StyledSearchForm>
            <div>
                  <button type='submit' >
                        <img src={SearchIcon} alt='Search' />
                  </button>
                  <Input
                    type='search'
                    placeholder='enter a category'
                    value={null}
                    onChange={handleChange}
                  />
            </div>
        </StyledSearchForm>
    )
}
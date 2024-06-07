import { ChangeEvent, useState } from 'react';

import { useAppSelector } from 'hooks/reduxHooks';

import { selectCoinList } from 'store/slices/coinsSlice/coinsSlice';

import { SearchList } from 'components/SearchList';

import { StyledModalSearch, StyledSearchIcon, StyledInput, StyledInputWrapper } from './StyledModalSearch';

export const ModalSearch = () => {
    const [value, setValue] = useState<string>('');
    
    const coinsList = useAppSelector(selectCoinList);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        
        setValue(value);
    };

    return (
        <StyledModalSearch>
            <StyledInputWrapper>
                <StyledSearchIcon />
                <StyledInput
                    value={value}
                    onChange={handleChange}
                />
            </StyledInputWrapper>
            <SearchList
                maxHeight='100vh'
                isLink={true}
                coins={coinsList} 
            />
        </StyledModalSearch>
    )
};
import { ChangeEvent, useState, FC } from 'react';

import { useAppSelector } from 'hooks/reduxHooks';


import { selectCoinList } from 'store/slices/coinsSlice/coinsSlice';

import { SearchList } from 'components/SearchList';
import { Button } from 'components/Button';
import { Portal } from 'components/Portal/Portal';

import { StyledModalSearch, StyledSearchIcon, StyledInput, StyledInputWrapper } from './StyledModalSearch';

interface IModalSearch {
    closeModal: () => void
};

export const ModalSearch: FC<IModalSearch> = ({ closeModal }) => {
    const [value, setValue] = useState<string>('');
    
    const coinsList = useAppSelector(selectCoinList);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        
        setValue(value);
    };

    return (
        <Portal>
            <StyledModalSearch>
                <StyledInputWrapper>
                    <div>
                        <StyledSearchIcon />
                        <StyledInput
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                    <Button
                        margin=''
                        type='button'
                        children='close'
                        onClick={closeModal}
                    />
                </StyledInputWrapper>
                <SearchList
                    $height='100vh'
                    isLink={true}
                    coins={coinsList}
                    searchQuery={value}
                />
            </StyledModalSearch>
        </Portal>
    )
};
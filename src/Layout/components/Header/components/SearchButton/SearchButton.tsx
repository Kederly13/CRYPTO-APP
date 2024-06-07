import { FC } from 'react';

import { StyledSearchButton, StyledSearchIcon } from './styledSearchButton';

interface ISearchButton {
    handleClick: () => void;
}

export const SearchButton: FC<ISearchButton> = ({ handleClick }) => (
    <StyledSearchButton onClick={handleClick}>
        <StyledSearchIcon />
    </StyledSearchButton>
);
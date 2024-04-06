import { StyledSearchButton } from './styledSearchButton';
import SearchIcon from 'assets/svg/search.svg';

export const SearchButton = () => (
    <StyledSearchButton>
        <img src={SearchIcon} alt='Search' />
    </StyledSearchButton>
);
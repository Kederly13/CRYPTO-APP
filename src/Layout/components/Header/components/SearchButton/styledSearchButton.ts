import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';

export const StyledSearchButton = styled.button`
    background-color: ${({ theme }) => theme.formBackgroundColor};
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    width: 52px;
    height: 52px;
    padding: 0;
    cursor: pointer;
    display: none;
    flex-shrink: 0;

    &:hover {
        background-color: rgba(25, 25, 38, 0.8);
    }

    @media (max-width: 992px) {
        display: block;
    }
`;

export const StyledSearchIcon = styled(SearchIcon)`
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.searchIcon.default};
`;
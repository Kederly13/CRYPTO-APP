import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';

export const StyledSearchIcon = styled(SearchIcon)`
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.searchIcon.default};
`;

export const StyledSearchForm = styled.form`
    max-width: 356px;
    width: 100%;
    border-radius: 6px;
    background: ${({ theme }) => theme.formBackgroundColor};
    margin-left: 158px;
    border: 1px solid ${({ theme }) => theme.formBorderColor};
    transition: 0.5s ease;
    position: relative;

    &:hover {
        background-color: ${({ theme }) => theme.buttonActiveColor};
        border: 1px solid ${({ theme }) => theme.buttonActiveBorderColor};
    }

    @media (max-width: 992px) {
        display: none;
    }

    & > div {
        display: flex;  
        align-items: center;
        padding: 0 16px;
        height: 100%;

        & > input {
            width: calc(100% - 20px);
            height: inherit;
            color: ${({ theme }) => theme.formFontColor};
        } 
    }
`;


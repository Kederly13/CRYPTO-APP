import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';

export const StyledModalSearch = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    background-color: ${({ theme }) => theme.formBackgroundColor};
    padding: 20px 50px;
`

export const StyledInputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.formBorderColor};
    transition: 0.5s ease;
    padding: 16px;    

    &:hover {
        background-color: ${({ theme }) => theme.buttonActiveColor};
        border: 1px solid ${({ theme }) => theme.buttonActiveBorderColor};
    }
`

export const StyledSearchIcon = styled(SearchIcon)`
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.searchIcon.default};
`;

export const StyledInput = styled.input`
    color: ${({ theme }) => theme.formFontColor};
`
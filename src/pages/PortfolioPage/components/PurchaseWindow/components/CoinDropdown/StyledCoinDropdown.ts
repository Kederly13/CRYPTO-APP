import styled from "styled-components";

export const StyledCoinDropdown = styled.ul`
    position: absolute;
    z-index: 150;
    top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    background-color: ${({ theme }) => theme.currencyMenu.background};
    border-radius: 6px; 
    color: inherit;
    max-height: 200px;
    overflow-y: auto;

    /* Scrollbar styles for WebKit browsers (Chrome, Safari) */
    &::-webkit-scrollbar {
        width: 200px;
    }

    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.scrollbar.track};
        border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.scrollbar.thumb};
        border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.scrollbar.thumbHover};
    }

    /* Scrollbar styles for Firefox */
    scrollbar-width: auto; /* "auto" or "thin" */
    scrollbar-color: ${({ theme }) => `${theme.scrollbar.thumb} ${theme.scrollbar.track}`};

`

export const StyledDropdownItem = styled.li`
    border: 1px solid transparent;
    color: ${({ theme }) => theme.buttonFontColor};
    padding: 15px 5px;
    width: 100%;
    transition: 0.2s ease; 

    & > button {
        color: ${({ theme }) => theme.buttonFontColor};
        width: 100%;
        height: 100%;
        display: block;
        color: inherit;
    }

    &:hover {
        background-color: ${({ theme }) => theme.periodFilter.selectedBackground};
        border-color: ${({ theme }) => theme.periodFilter.borderColor};

        cursor: pointer;
        border-radius: 6px;
        box-shadow: 4px 4px 20px 8px rgba(120, 120, 255, 0.15);
        color: ${({ theme }) => theme.buttonActiveFontColor};
    };         
`


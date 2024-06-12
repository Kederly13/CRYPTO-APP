import styled from "styled-components";

interface StyledModalSearchProps {
    maxHeight?: string;
    top?: string;
    left?: string;
};

export const StyledSearchList = styled.div<StyledModalSearchProps>`
    position: absolute;
    z-index: 12000;
    top: ${({ top }) => top || 'none'};
    left: ${({ left }) => left || 'none'};
    flex-direction: column;
    width: 100%;
    background-color: ${({ theme }) => theme.currencyMenu.background};
    border-radius: 6px; 
    color: inherit;
    overflow-y: auto;
    height: 100%;
    max-height: ${({ maxHeight }) => maxHeight || '500px'};

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

export const StyledSearchListItem = styled.li`
    border: 1px solid transparent;
    color: ${({ theme }) => theme.buttonFontColor};
    padding: 15px 5px;
    width: 100%;
    transition: 0.2s ease; 

    & > a {
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


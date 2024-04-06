import styled from 'styled-components';

export const StyledCurrencyWrapper = styled.div`
    position: relative;
    margin: 0 16px;
    border-radius: 6px;
    background-color: #191926;
    width: 100px;
`

export const StyledCurrency = styled.button`
    color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 10px;
    height: 100%;

    & > svg:first-child {
        margin-right: 8px;
    }

    & > span {
        margin-right: 8px;
    }
`
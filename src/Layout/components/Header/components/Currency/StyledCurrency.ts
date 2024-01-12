import styled from 'styled-components';

export const StyledCurrency = styled.div`
    position: relative;
    padding: 12px 10px;
    
    align-items: center;
    margin: 0 16px;
    border-radius: 6px;
    background-color: #191926;

    & > button {
        color: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > span {
        display: block;
        margin: 0 8px;
    }
}

    
    
`
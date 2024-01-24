import styled from 'styled-components'; 

export const StyledSearchForm = styled.form`
    max-width: 356px;
    width: 100%;
    border-radius: 6px;
    background: #191926;
    margin-left: 158px;

    & > div {
        display: flex;  
        align-items: center;
        padding: 8px 16px;
        height: 100%;

        & > input {
            width: calc(100% - 20px);
            height: inherit;
        } 
    }  
`;
import styled from 'styled-components'; 

export const StyledSearchForm = styled.form`
    & > div {
        display: flex;  
        justify-content: center;
        padding: 16px;
        
        & > input {
            margin-left: 12px;
        }
    }  
`;
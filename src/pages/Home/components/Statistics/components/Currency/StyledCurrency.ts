import styled from 'styled-components';

export const StyledCurrency = styled.div`
    background-color: #191926;
    border-radius: 6px;
    max-width: 252px;

    & > div {
        padding: 16px;
        display: flex;
        align-items: center;

        & > img {
            width: 32px;
            height: 32px;
        }

        & > div {
            & > p {
                color: #FFF;
            }

            & > span:nth-child(2) {
                color: #D1D1D1;
                font-size: 14px;
            }

            & > span:nth-child(3) {
                color: '#FF0061';
            }
        }
    }
`
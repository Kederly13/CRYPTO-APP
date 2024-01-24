import styled from 'styled-components';

export const StyledCurrency = styled.div`
    background: #191926;
    /* background: rgba(97, 97, 222, 0.50);
    border: 1px solid #7878FF; */
    max-width: 252px;
    padding: 16px;
    display: flex;
    align-items: center;

    & > img {
        width: 32px;
        height: 32px;
    }

    & > div {
        margin-left: 15px;

        & > p {
            color: #FFF;
            display: flex;
        }

        & > div {
            display: flex;
            margin-top: 5px;

            & > span:nth-child(1) {
                color: #D1D1D1;
                font-size: 14px;
            }

            & > span:nth-child(2) {
                color: #FF0061;
            }
        }                                                                                                                                                           
    }
`                                                                                                                                                                                                       
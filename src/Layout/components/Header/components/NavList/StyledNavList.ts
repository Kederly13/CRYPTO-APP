import styled from 'styled-components';

export const StyledNavList = styled.ul`
    display: flex;

    & > li {
        display: flex;
        align-items: center;
        padding: 12px;
        font-weight: 500;
        transition: 0.5s;
        border-radius: 6px;

        & > a {
            display: inline-flex;
            align-items: center;

            &:hover {
                background-color: rgba(97, 97, 222, 0.50);

                svg {
                    fill: #FFF;
                }
            }
            

            & > img {
                margin-right: 10px;
            }
        }
    }
`;
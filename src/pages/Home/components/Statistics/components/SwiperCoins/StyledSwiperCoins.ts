import styled from 'styled-components';

import { IStyledSwiperCoinsProps } from './SwiperCoins';

export const StyledCurrencyWrapper = styled.div`
    margin-left: 15px;
`

export const StyledCurrencyName = styled.div<IStyledSwiperCoinsProps>`
    color: ${({ $active, theme}) => ($active ? theme.swiperCoin.activeFont : theme.swiperCoin.font)};
    display: flex;
    font-weight: 500;

    .name {
        @media(max-width: 576px) {
            display: none;
        }
    }
`

export const StyledCurrencyPriceWrapper = styled.div`
    display: flex;
    margin-top: 5px;
`

export const StyledCurrencyPrice = styled.span<IStyledSwiperCoinsProps>`
    color: ${({ $active, theme}) => ($active ? theme.swiperCoin.activePriceFont : theme.swiperCoin.priceFont)};
    font-size: 14px;
`

export const StyledSwiperCoins = styled.div<IStyledSwiperCoinsProps>`
    background: ${({ $active, theme }) => ($active ? theme.swiperCoin.activeBackground : theme.swiperCoin.defaultBackground)};
    border: ${({ $active, theme }) => ($active ? '1px solid' + theme.swiperCoin.activeBorder : '1px solid transparent')};
    box-shadow: ${({ $active, theme }) => ($active ? theme.swiperCoin.boxShadow : 'none')};
    max-width: 252px;
    padding: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 6px;

    .currencyLogo {
        width: 32px;
        height: 32px;
    }
`                                                                                                                                                                                                       
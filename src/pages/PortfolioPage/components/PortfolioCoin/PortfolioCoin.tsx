import { FC } from 'react';
import { currencyData } from 'Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData';

import { Percent } from 'components/Percent';
import { ReactComponent as DeleteIcon } from 'assets/svg/delete.svg';

import { selectCoinList } from 'store/slices/coinsSlice/coinsSlice';
import { ICompleteHistoricalData } from 'store/slices/coinsSlice/types';
import {  removePortfolioCoin } from 'store/slices/coinsSlice/coinsSlice';

import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

import { 
    StyledPortfolioCoin, 
    StyledLogoWrapper, 
    StyledCoinInfo, 
    StyledCoinInfoHeader, 
    StyledCoinInfoTitle, 
    StyledCoinInfoCol,
    StyledCoinText,
    StyledCoinValue,
    StyledCoinInfoGrid, 
} from './StyledPortfolioCoin';


interface IPortfolioCoinProps {
    historicalData: ICompleteHistoricalData;
};

export const PortfolioCoin: FC<IPortfolioCoinProps> = ({ historicalData }) => {
    const dispatch = useAppDispatch();
    const coinsList = useAppSelector(selectCoinList);
    
    const { 
        id, 
        symbol, 
        name, 
        image,
        purchasedAmount,
        market_data,
        purchasedDate
    } = historicalData;

    const selectedCoin = coinsList.find((coin) => coin.id === id);

    const getCoinError = (coinName: string) => `${coinName.toUpperCase()} was not launched yet on selected date`

    let current_price, price_change_24h, circulating_supply, max_supply, total_volume, market_cap;

    if (selectedCoin) {
        current_price = selectedCoin.current_price;
        price_change_24h = selectedCoin.price_change_24h;
        circulating_supply = selectedCoin.circulating_supply;
        max_supply = selectedCoin.max_supply;
        total_volume = selectedCoin.total_volume;
        market_cap = selectedCoin.market_cap;
    };

    const { objSearchParams } = useSelectedObjSearchParams();
    const { currency } = objSearchParams;

    // Ciculated supply vs max supply
    // const ratio = circulating_supply && max_supply ? (circulating_supply / max_supply).toFixed(2) : 'N/A'

    // Percentage change in price since purchase
    const historical_price = market_data?.current_price?.usd;
    const percentageChange = current_price !== undefined
    ? Number((((current_price - historical_price) / historical_price) * 100).toFixed(2))
    : 0;

    // Amount Value
    
    const amountValue = historical_price !== undefined ? 
    (historical_price * Number(purchasedAmount)).toFixed(2) : getCoinError(symbol);

    const { symbol: currencySymbol } = currencyData.find(item => item.value === currency) || {};

    return (
        <StyledPortfolioCoin>
            <StyledLogoWrapper>
                <img src={image.thumb} alt='coin logo'/>
                <span>{name}</span>
            </StyledLogoWrapper>
            <StyledCoinInfo>
                <StyledCoinInfoHeader>
                    <StyledCoinInfoTitle>Market Price</StyledCoinInfoTitle>
                    <button type='button' onClick={() => dispatch(removePortfolioCoin(id))}>
                        <DeleteIcon />
                    </button>
                </StyledCoinInfoHeader>
                <StyledCoinInfoGrid className='top'>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Current price</StyledCoinText>
                        <StyledCoinValue>{currencySymbol}{current_price}</StyledCoinValue>
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Price change 24h</StyledCoinText>
                            <Percent
                                $percent={price_change_24h || 0}
                                children={currencySymbol}
                            />
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Market Cap </StyledCoinText>
                        <StyledCoinValue>{market_cap}</StyledCoinValue>
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Total Volume</StyledCoinText>
                        <StyledCoinValue>{total_volume}</StyledCoinValue>
                    </StyledCoinInfoCol>
                </StyledCoinInfoGrid>
                <StyledCoinInfoHeader>
                    <StyledCoinInfoTitle className='bottom-title'>Your Coin</StyledCoinInfoTitle>
                </StyledCoinInfoHeader>
                <StyledCoinInfoGrid className='bottom'>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Coin ammount:</StyledCoinText>
                        <StyledCoinValue>{purchasedAmount}</StyledCoinValue>
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Amount value</StyledCoinText>
                        <StyledCoinValue>{amountValue}</StyledCoinValue>
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Amount price change since purchase</StyledCoinText>
                        {percentageChange ? (
                            <Percent
                                $percent={percentageChange || 0}
                                children='%'
                            />
                        ) : (
                            <StyledCoinValue>N/A</StyledCoinValue> 
                        )}
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Purchase date</StyledCoinText>
                        <StyledCoinValue>{purchasedDate}</StyledCoinValue>
                    </StyledCoinInfoCol>
                </StyledCoinInfoGrid>
            </StyledCoinInfo>
        </StyledPortfolioCoin>
    )
};
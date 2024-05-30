import { FC, useState } from 'react';
import { currencyData } from 'Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { Percent } from 'components/Percent';
import { TableProgressBar } from 'components/TableProgresBar';

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
    StyledBar 
} from './StyledPortfolioCoin';
import { IPortfolioData } from 'store/slices/coinsSlice/types';

interface IPortfolioCoinProps {
    portfolioCoin: IPortfolioData;
};

export const PortfolioCoin: FC<IPortfolioCoinProps> = ({ portfolioCoin }) => {
    const { 
        id, 
        symbol, 
        name, 
        image, 
        current_price,
        price_change_24h,
        circulating_supply,
        max_supply,
        total_volume,
        market_cap
    } = portfolioCoin;

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();
    const { currency } = objSearchParams;

    // Ciculated supply vs max supply
    const ratio = circulating_supply / max_supply;
    const formattedRatio = ratio.toFixed(2);

    // Market cap vs volume
    const marketCapVsVolume = (market_cap / total_volume) * 100;
    
    console.log(marketCapVsVolume);

    const { symbol: currencySymbol } = currencyData.find(item => item.value === currency) || {};

    return (
        <StyledPortfolioCoin>
            <StyledLogoWrapper>
                <img src={image} alt='coin logo'/>
                <span>{name}</span>
            </StyledLogoWrapper>
            <StyledCoinInfo>
                <StyledCoinInfoHeader>
                    <StyledCoinInfoTitle>Market Price</StyledCoinInfoTitle>
                </StyledCoinInfoHeader>
                <StyledCoinInfoGrid className='top'>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Current price</StyledCoinText>
                        <StyledCoinValue>{currencySymbol}{current_price}</StyledCoinValue>
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Price change 24h</StyledCoinText>
                            <Percent
                                $percent={price_change_24h}
                                children={currencySymbol}
                            />
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Market Cap vs Volume</StyledCoinText>
                        {/* <StyledBar
                            value={} max={100} 
                        /> */}
                            
                        
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Circ supply vs max supply</StyledCoinText>
                        <StyledCoinValue>{formattedRatio}</StyledCoinValue>
                    </StyledCoinInfoCol>
                </StyledCoinInfoGrid>
                <StyledCoinInfoHeader>
                    <StyledCoinInfoTitle className='bottom-title'>Market Price</StyledCoinInfoTitle>
                </StyledCoinInfoHeader>
                <StyledCoinInfoGrid className='bottom'>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Coin ammount:</StyledCoinText>
                        <StyledCoinValue>{}</StyledCoinValue>
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Amount value</StyledCoinText>
                        <StyledCoinValue>{}</StyledCoinValue>
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Amount price change since purchase</StyledCoinText>
                        <StyledCoinValue>{}</StyledCoinValue>
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Purchase date</StyledCoinText>
                        <StyledCoinValue>{}</StyledCoinValue>
                    </StyledCoinInfoCol>
                </StyledCoinInfoGrid>
            </StyledCoinInfo>
        </StyledPortfolioCoin>
    )
}
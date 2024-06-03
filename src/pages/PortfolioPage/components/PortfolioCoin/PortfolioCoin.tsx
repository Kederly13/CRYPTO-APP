import { FC } from 'react';
import { currencyData } from 'Layout/components/Header/components/Currency/components/CurrencyMenu/currencyData';

import { ICoin } from 'types/coinType';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { Percent } from 'components/Percent';
import { TableProgressBar } from 'components/TableProgresBar';

import { selectCoinList } from 'store/slices/coinsSlice/coinsSlice';

import { useAppSelector } from 'hooks/reduxHooks';

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
import { IHistoricalData } from 'store/slices/coinsSlice/types';

interface IPortfolioCoinProps {
    historicalData: IHistoricalData;
};

export const PortfolioCoin: FC<IPortfolioCoinProps> = ({ historicalData }) => {
    const coinsList = useAppSelector(selectCoinList);
    
    const { 
        id, 
        symbol, 
        name, 
        image, 
    } = historicalData;

    const selectedCoin = coinsList.find((coin) => coin.id === id);
    console.log(selectedCoin)

    let current_price, price_change_24h, circulating_supply, max_supply, total_volume, market_cap;

    if (selectedCoin) {
        current_price = selectedCoin.current_price;
        price_change_24h = selectedCoin.price_change_24h;
        circulating_supply = selectedCoin.circulating_supply;
        max_supply = selectedCoin.max_supply;
        total_volume = selectedCoin.total_volume;
        market_cap = selectedCoin.market_cap;
    }

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();
    const { currency } = objSearchParams;

    // Ciculated supply vs max supply
    const ratio = circulating_supply && max_supply ? (circulating_supply / max_supply).toFixed(2) : 'N/A';

    // Market cap vs volume
    const marketCapVsVolume = market_cap && total_volume ? ((market_cap / total_volume) * 100).toFixed(2) : 'N/A';

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
                        <StyledCoinText>Market Cap vs Volume</StyledCoinText>
                        <StyledBar
                            value={marketCapVsVolume} max={100} 
                        />
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Circ supply vs max supply</StyledCoinText>
                        <StyledCoinValue>{ratio}</StyledCoinValue>
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
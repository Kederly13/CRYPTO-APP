import { FC, useState } from 'react';

import { 
    StyledPortfolioCoin, 
    StyledLogoWrapper, 
    StyledCoinInfo, 
    StyledCoinInfoHeader, 
    StyledCoinInfoTitle, 
    StyledCoinInfoCol,
    StyledCoinText,
    StyledCoinValue,
    StyledCoinInfoGrid 
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
    } = portfolioCoin;

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
                <StyledCoinInfoGrid>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Current price</StyledCoinText>
                        <StyledCoinValue>{}</StyledCoinValue>
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Price cgange 24h</StyledCoinText>
                        <StyledCoinValue>{}</StyledCoinValue>
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Market Cop vs Volume</StyledCoinText>
                        <StyledCoinValue>{}</StyledCoinValue>
                    </StyledCoinInfoCol>
                    <StyledCoinInfoCol>
                        <StyledCoinText>Circ supply vs max supply</StyledCoinText>
                        <StyledCoinValue>{}</StyledCoinValue>
                    </StyledCoinInfoCol>
                </StyledCoinInfoGrid>
                <StyledCoinInfoHeader>
                    <StyledCoinInfoTitle>Market Price</StyledCoinInfoTitle>
                </StyledCoinInfoHeader>
                <StyledCoinInfoGrid>
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
import {  
    StyledCoinTableHead, 
    StyledCoinTableHeaderRow, 
    StyledCoinTableHeader, 
    StyledHeadNum,
    StyledHeadName,
    StyledHeadPrice,
    StyledHead1h,
    StyledHead24h,
    StyledHead7d,
    StyledHeadMCap,
    StyledHeadSupply,
    StyledHeadChart
 } from './StyledCoinTableHead';

export const CoinTableHead = () => (
    <StyledCoinTableHead>
        <StyledCoinTableHeaderRow>
            <StyledCoinTableHeader>
                <StyledHeadNum><span>#</span></StyledHeadNum>
            </StyledCoinTableHeader>
            <StyledCoinTableHeader>
                <StyledHeadName><span>Name</span></StyledHeadName>
            </StyledCoinTableHeader>
            <StyledCoinTableHeader>
                <StyledHeadPrice><span>Price</span></StyledHeadPrice>
            </StyledCoinTableHeader>
            <StyledCoinTableHeader>
                <StyledHead1h><span>1h%</span></StyledHead1h>
            </StyledCoinTableHeader>
            <StyledCoinTableHeader>
                <StyledHead24h><span>24h%</span></StyledHead24h>
            </StyledCoinTableHeader>
            <StyledCoinTableHeader>
                <StyledHead7d><span>7d%</span></StyledHead7d>
            </StyledCoinTableHeader>
            <StyledCoinTableHeader>
                <StyledHeadMCap><span>24h volume / Market Cap</span></StyledHeadMCap>
            </StyledCoinTableHeader>
            <StyledCoinTableHeader>
                <StyledHeadSupply><span>Circulating / Total supply</span></StyledHeadSupply>
            </StyledCoinTableHeader>
            <StyledCoinTableHeader>
                <StyledHeadChart><span>Last 7d</span></StyledHeadChart>
            </StyledCoinTableHeader>
        </StyledCoinTableHeaderRow>
   </StyledCoinTableHead>
);

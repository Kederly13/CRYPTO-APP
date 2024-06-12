import {  
    StyledCoinTableHead, 
    StyledCoinTableHeaderRow,
    StyledHeadNum,
    StyledHeadName,
    StyledHeadPrice,
    StyledHead1h,
    StyledHead24h,
    StyledHead7d,
    StyledHeadMCap,
    StyledHeadSupply,
    StyledHeadChart,
 } from './StyledCoinTableHead';

export const CoinTableHead = () => {
    return (
        <StyledCoinTableHead>
            <StyledCoinTableHeaderRow>
                    <StyledHeadNum><span>#</span></StyledHeadNum>
                    <StyledHeadName><span>Name</span></StyledHeadName>
                    <StyledHeadPrice><span>Price</span></StyledHeadPrice>
                        <>
                            <StyledHead1h><span>1h%</span></StyledHead1h>
                            <StyledHead24h><span>24h%</span></StyledHead24h>
                            <StyledHead7d><span>7d%</span></StyledHead7d>
                        </>

                        <>
                            <StyledHeadMCap><span>24h volume / Market Cap</span></StyledHeadMCap>
                            <StyledHeadSupply><span>Circulating / Total supply</span></StyledHeadSupply>
                        </>

                        <StyledHeadChart><span>Last 7d</span></StyledHeadChart>

            </StyledCoinTableHeaderRow>
    </StyledCoinTableHead>
    )
};

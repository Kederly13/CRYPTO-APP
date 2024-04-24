import { ConvertorCoin } from './components/ConvertorCoin';

import { useAppSelector } from 'hooks/reduxHooks';
import { useTheme } from 'styled-components';

import { StyledSwithcWrapper, StyledConvertorSection, StyledHeading, StyledDateTime, StyledConvertorWrapper, StyledConvertorCoinWrapper } from './StyledConvertorSection';
import { selectCoinList } from 'store/slices/coinsSlice/coinSlice';
import { getDateTime } from 'utils/getDateTime';
import { ReactComponent as Switch } from 'assets/svg/switch.svg';

export interface IStyledConvertorCoinWrapperProps {
    $backgroundColor?: string; // Corrected prop name
}

export const ConvertorSection = () => {
    const currentDayTime = getDateTime();
    const theme = useTheme();

    const coinsList = useAppSelector(selectCoinList);
    const firstCoin = coinsList[0];
    const coinSecond = coinsList[1];

    console.log(firstCoin, coinSecond)

    return (
        <StyledConvertorSection>
            <StyledHeading>
                Online currency convertor
            </StyledHeading>
            <StyledDateTime>
                {currentDayTime}
            </StyledDateTime>
            <StyledConvertorWrapper>
                <StyledConvertorCoinWrapper $backgroundColor={theme.boxBackground.backgroundPrimary}>
                    <ConvertorCoin name={firstCoin.name} symbol={firstCoin.symbol} image={firstCoin.image} heading='You sell' />
                </StyledConvertorCoinWrapper>
                <StyledSwithcWrapper type='button'>
                    <Switch />
                </StyledSwithcWrapper>
                <StyledConvertorCoinWrapper $backgroundColor={theme.boxBackground.backgroundSecondary}>    
                    <ConvertorCoin name={coinSecond.name} symbol={coinSecond.symbol} image={coinSecond.image} heading='You buy' />
                </StyledConvertorCoinWrapper>
            </StyledConvertorWrapper>
        </StyledConvertorSection>
    )
};
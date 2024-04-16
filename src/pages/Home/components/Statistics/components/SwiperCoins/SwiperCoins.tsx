import { FC } from 'react';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { removeCoin } from 'store/slices/coinsHistory/coinsHistorySlice';

import { StyledSwiperCoins, StyledCurrencyWrapper, StyledCurrencyName, StyledCurrencyPriceWrapper, StyledCurrencyPrice } from './StyledSwiperCoins';
import { useAppDispatch } from 'hooks/reduxHooks';
import { useResize } from 'hooks/useResize';

import { SEARCH_PARAMS } from 'constants/searchParams';
import { MEDIA_SIZES } from 'constants/mediaSizes';

export interface ISwiperCoinsProps {
    disabled?: boolean,
    $percent: React.ReactNode;
    onClick?: () => void,
    $logo: string,
    name: string,
    $symbol: string,
    $price: number,
    id: string
};

export interface IStyledSwiperCoinsProps {
    $active?: boolean;
};

export type SwiperCoinsProps = ISwiperCoinsProps & IStyledSwiperCoinsProps;

export const SwiperCoins: FC<SwiperCoinsProps> = ( props ) => {
    const { $logo, name, $symbol, $price, $percent, id } = props;
    const dispatch = useAppDispatch();

    const { width } = useResize();

    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    const onClick = () => {
        dispatch(removeCoin({ id }));
        onSetObjSearchParams({
            ...objSearchParams,
            [SEARCH_PARAMS.COIN]: id,
        },
        {
            toggle: true,
            minToggle: 1,
            limitMultiple: 2,
            multiple: true,
        })
    }

    return (
        <StyledSwiperCoins
            {...props} 
            onClick={onClick}
            $active={objSearchParams?.coin?.includes(id)}
        >
            <img className='currencyLogo' src={$logo} alt='logo'/>
            <StyledCurrencyWrapper >
                <StyledCurrencyName $active={objSearchParams?.coin?.includes(id)}>{name} ({$symbol})</StyledCurrencyName>
                {width > MEDIA_SIZES.XL && (
                    <StyledCurrencyPriceWrapper>
                        <StyledCurrencyPrice $active={objSearchParams?.coin?.includes(id)}>{$price}</StyledCurrencyPrice>{$percent}
                    </StyledCurrencyPriceWrapper>
                )}
            </StyledCurrencyWrapper>
        </StyledSwiperCoins>
    );
};

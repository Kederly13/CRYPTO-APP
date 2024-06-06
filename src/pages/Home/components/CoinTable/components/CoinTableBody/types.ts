import { Ref } from 'react';

import { ICoin } from 'types/coinType';

export interface ICoinNameProps {
    name: string,
    image: string,
    symbol: string,
};

export interface ICoinNumProps {
    number: number
};

export interface IPrice1hColProps {
    price_change_percentage_1h_in_currency: number,
};

export interface IPrice24hColProps {
    price_change_percentage_24h_in_currency: number,
};

export interface IPrice7dColProps {
    price_change_percentage_7d_in_currency: number,
};

export interface ICoinPriceProps {
    current_price: number,
};

export interface IProgressBarProps {
    market_cap: number,
    market_cap_change_24h: number,
    circulating_supply: number,
    total_volume: number,
    total_supply: number
};

export interface ISparklineProps {
    price: number[]
};

export interface IRefProps {
    forwardedRef?: Ref<HTMLTableRowElement>
    ref?: Ref<HTMLTableRowElement>;
};

export type TCoinTableRow = ICoinNameProps
    & ICoinNumProps 
    & ICoinPriceProps 
    & IPrice1hColProps 
    & IRefProps 
    & IPrice24hColProps 
    & IPrice7dColProps 
    & IProgressBarProps 
    & ISparklineProps;

// export interface ICoinProps {
//     name: string;
//     logo: string;
//     symbol: string;
//     number: number;
//     currentPrice: number;
//     priceChangePercentage1h: number;
//     priceChangePercentage24h: number;
//     priceChangePercentage7d: number;
// }

// export type TCoinTableRow = ICoin & {
//     number: number;
// };
import { ICoin } from 'types/coinType';

export interface ICoinNameProps {
    name: string,
    image: string,
    symbol: string
};

export interface ICoinNumProps {
    number: number
};

export interface IPrice1hCol {
    price_change_percentage_1h_in_currency: number,
};

export interface IPrice24hCol {
    price_change_percentage_24h_in_currency: number,
};

export interface IPrice7dCol {
    price_change_percentage_7d_in_currency: number,
};

export interface ICoinPriceProps {
    current_price: number,
};

export type TCoinTableRow = ICoinNameProps & ICoinNumProps & ICoinPriceProps & IPrice1hCol & IPrice24hCol & IPrice7dCol;

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
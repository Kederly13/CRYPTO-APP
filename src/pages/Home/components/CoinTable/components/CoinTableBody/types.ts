export interface ICoinNameProps {
    coinName: string,
    coinLogo: string,
    coinSymbol: string
};

export interface ICoinNumProps {
    coinNumber: number
};

export interface IPrice1hCol {
    price_change_percentage_1h_in_currency: number,
}

export interface ICoinPriceProps {
    current_price: number,

    price_change_percentage_7d_in_currency?: number,
    price_change_percentage_24h?: number,
};

export type TCoinTableRow = ICoinNameProps & ICoinNumProps & ICoinPriceProps & IPrice1hCol;
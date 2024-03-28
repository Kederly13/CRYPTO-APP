import axios, { AxiosResponse } from 'axios';

// const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency';

export interface ICoinsAPIGetCoinsParams {
    payload: {
        currency: string,
        page: string
    },
    controller: AbortController
};

export const CoinsApi = {
    async getCoins({ payload, controller }: ICoinsAPIGetCoinsParams): Promise<AxiosResponse> {
        return await axios.get(`${url}=${payload.currency}&order=market_cap_desc&per_page=50&page=${payload.page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`,
        { signal: controller?.signal });
    }
};
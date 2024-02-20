import axios, { AxiosResponse } from 'axios';  

const url = 'https://api.coingecko.com/api/v3/coins';
// const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=daily'

export const ChartApi = {
    async getPrices(coin: string, days: string): Promise<AxiosResponse> {
        return await axios.get(`${url}/${coin}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
    }
};
import axios, { AxiosResponse } from 'axios';  

const url = 'https://api.coingecko.com/api/v3/coins';
// const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily'


export const ChartApi = {
    async getPrices(currency: string): Promise<AxiosResponse> {
        return await axios.get(`${url}/${currency}/market_chart?vs_currency=usd&days=180&interval=daily`);
    }
};
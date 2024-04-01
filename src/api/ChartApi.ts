import axios, { AxiosResponse } from 'axios';

const url = 'https://api.coingecko.com/api/v3/coins';
// const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=daily'

interface IChartAPIGetPricesParams {
    payload: {
        id: string,
        days: string,
        currency: string
    },
    controller: AbortController
}; 

export const ChartApi = {
    async getPrices({ payload, controller}: IChartAPIGetPricesParams): Promise<AxiosResponse> {
        return await axios.get(`${url}/${payload.id}/market_chart?vs_currency=${payload.currency}&days=${payload.days}&interval=daily`,
        {signal: controller.signal});
    }
};

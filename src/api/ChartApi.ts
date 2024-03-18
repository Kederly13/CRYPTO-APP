import axios, { AxiosResponse } from 'axios';

import { IFetchCoinsHistoryParams } from 'store/slices/coinsHistory/type';

const url = 'https://api.coingecko.com/api/v3/coins';
// const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=daily'

export const ChartApi = {
    async getPrices({ payload, controller}: IFetchCoinsHistoryParams): Promise<AxiosResponse> {
        return await axios.get(`${url}/${payload.id}/market_chart?vs_currency=usd&days=${payload.days}&interval=daily`,
        {signal: controller.signal});
    }
};

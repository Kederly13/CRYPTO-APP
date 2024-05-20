import axios, { AxiosResponse } from 'axios';

const url = 'https://pro-api.coingecko.com/api/v3/coins/';
const urlRest = 'localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false&x_cg_pro_api_key='
const key = 'CG-JC2VQVMZA6H58bdgwzrNkNkH';

export const CoinSummaryApi = {
    async getCoinSummary(coin: string, controller: AbortController ): Promise<AxiosResponse> {
        return await axios.get(`${url}${coin}${urlRest}${key}`,
        { signal: controller?.signal })
    }   
};
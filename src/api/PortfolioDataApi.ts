import axios, { AxiosResponse } from "axios";

const url = 'https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin';
const urlRest = '&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&x_cg_pro_api_key=';
const key = 'CG-JC2VQVMZA6H58bdgwzrNkNkH';

export interface IGetPortfolioPricesParams {
    payload: {
        currency: string,
        coin: string
    },
    controller: AbortController
};

export const PortfolioDataApi = {
    async getPortfolioData({ payload, controller }: IGetPortfolioPricesParams): Promise<AxiosResponse> {
        return await axios.get(`${url}${payload.currency}&ids=${payload.coin}${urlRest}${key}`,
        {signal: controller.signal});
    }
};

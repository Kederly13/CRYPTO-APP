import axios, { AxiosResponse } from "axios";

const url = 'https://pro-api.coingecko.com/api/v3/coins/';
const key = 'CG-JC2VQVMZA6H58bdgwzrNkNkH';

export interface IGetHistoricalDataParams {
    payload: {
        purchasedDate: string,
        purchasedAmount?: string,
        coin: string,
    },
    controller: AbortController
};

export const HistoricalDataApi = {
    async getHistoricalData({ payload, controller }: IGetHistoricalDataParams): Promise<AxiosResponse> {
        return await axios.get(`${url}${payload.coin}/history?date=${payload.purchasedDate}&x_cg_pro_api_key=${key}`,
        {signal: controller.signal});
    }
};

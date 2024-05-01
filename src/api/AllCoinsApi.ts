import axios, { AxiosResponse } from 'axios';

// const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d';

const url = 'https://api.coingecko.com/api/v3/search?locale=en';
const key = 'JC2VQVMZA6H58bdgwzrNkNkH';
export interface IAllCoinsAPIGetAllCoinsParams {
    controller: AbortController
};

export const getAllCoinsApi = async (controller?: AbortController) => {
    return await axios.get(url, { signal: controller?.signal });
};

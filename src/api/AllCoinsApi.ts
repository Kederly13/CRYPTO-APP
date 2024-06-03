import axios, { AxiosResponse } from 'axios';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
const key = 'CG-JC2VQVMZA6H58bdgwzrNkNkH';

export const AllCoinsApi = {
    async getAllCoinsList(controller?: AbortController) {
        return await axios.get(url,
            { signal: controller?.signal }
        )
    }
};

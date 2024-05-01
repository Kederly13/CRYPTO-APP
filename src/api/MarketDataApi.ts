import axios from 'axios';

const url = 'https://api.coingecko.com/api/v3/global';

export const MarketDataApi = {
    async getMarketData(controller?: AbortController) {
        return await axios.get(url, 
            { signal: controller?.signal });
    }
};
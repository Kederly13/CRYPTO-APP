import { ICoin } from "types/coinType";

export type TCoinData = Array<Array<number>>;

export interface ICoinObjHistory {
    prices: TCoinData,
    market_caps: TCoinData,
    total_volumes: TCoinData,
};

export type TCoinHistory = Record<string, ICoinObjHistory>;

export interface IMarketDataProps {
    active_cryptocurrencies: number;
    upcoming_icos: number;
    ongoing_icos: number;
    ended_icos: number;
    markets: number;
    total_market_cap: {
        [key: string]: number;
    };
    total_volume: {
        [key: string]: number;
    };
    market_cap_percentage: {
        [key: string]: number;
    };
    market_cap_change_percentage_24h_usd: number;
    updated_at: number;
};

export interface IFetchCoinsHistoryPayload {
    ids: string[];
    days: string;
    currency: string
};

export interface IFetchCoinsHistoryParams {
    coinsHistoryPayload: IFetchCoinsHistoryPayload;
    controller: AbortController;
};

export type TCoinsState = {
    coinsHistory: TCoinHistory,
    coinList: ICoin[];
    lastCoins: ICoin[];
    marketData: IMarketDataProps | null;
    page: number,
    loading: boolean,
    error: null | string,
};


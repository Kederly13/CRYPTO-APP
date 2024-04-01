export type TCoinData = Array<Array<number>>;

export interface ICoinObjHistory {
    prices: TCoinData,
    market_caps: TCoinData,
    total_volumes: TCoinData,
};

export type TCoinHistory = Record<string, ICoinObjHistory>;

export type TCoinsHistoryState = {
    coinsHistory: TCoinHistory,
    loading: boolean,
    error: null | string,
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
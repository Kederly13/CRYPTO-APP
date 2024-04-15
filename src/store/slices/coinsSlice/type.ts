import { ICoin } from "types/coinType";

export type CoinsState = {
    coinList: ICoin[];
    lastCoins: ICoin[];
    loading: boolean,
    error: null,
    page: number
};
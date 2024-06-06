import { RootState } from 'store';
import { createAsyncThunk, PayloadAction, asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

import { ChartApi } from 'api/ChartApi';
import { CoinsApi } from 'api/CoinsApi';
import { CoinSummaryApi } from 'api/CoinSummaryApi';
import { MarketDataApi } from 'api/MarketDataApi';
import { HistoricalDataApi } from 'api/HistoricalDataApi';
import { IGetHistoricalDataParams } from 'api/HistoricalDataApi';

import { ICoin } from 'types/coinType';
import { ICoinObjHistory, TCoinsState, IMarketDataPayload, ICoinSummaryPayload, ICompleteHistoricalData } from './types';

import { getErrorMessage } from 'utils/getErrorMessage';
import { getLocationSearchParams } from 'utils/getLocationSearchParams';

export const fetchCoinHistory = createAsyncThunk<Record<string, ICoinObjHistory>, AbortController, {rejectValue: string}>(
    'coins/fetchCoinHistory',
    async (controller, { rejectWithValue }) => {
        try {
            const { currency, days, coin } = getLocationSearchParams();
            const ids = coin ? coin.split(',') : [];
            let data;

            if (ids?.length) {
                data = await Promise.all(

                    ids.map(async (id) => {
                        const paramsSingle = {
                            payload: { id, days, currency },
                            controller
                        }

                        const { data } = await ChartApi.getPrices(paramsSingle);

                        return {
                            [id]: data
                        } 
                    })
                )
            } else {
                const paramsSingle = {
                    payload: { id: 'bitcoin', days: '7', currency: 'usd' },
                    controller
                }

                const response = await ChartApi.getPrices(paramsSingle);

                data = [{
                    bitcoin: response.data
                }]
            }

            const dataObj = data.reduce((items, item) => {
                return {
                    ...items,
                    ...item
                }
            }, {})

            return dataObj;
        } catch (error) {
            toast.error('Error fetching coins: ' + getErrorMessage(error)); // Show the error message in the toast
            return rejectWithValue(getErrorMessage(error));

        }
    }   
);

export const fetchCoins = createAsyncThunk<ICoin[], AbortController, {rejectValue: string}>(
    'coins/fetchCoins',
    async (controller, { rejectWithValue, getState }) => {
        const state = getState() as RootState;
        const { currency } = getLocationSearchParams();

        try {
            const param = {
                payload: { 
                    currency: currency || 'usd',
                    page: state.coins.page                
                },
                controller
            }

            const { data } = await CoinsApi.getCoins(param);

            return data;
        } catch(error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

export const fetchCoinSummary = createAsyncThunk<ICoinSummaryPayload, { coin: string, controller: AbortController }, {rejectValue: string}>(
    'coins/fetchCoinSummary',
    async ({ coin, controller }, { rejectWithValue }) => {

        try {
            const { data } = await CoinSummaryApi.getCoinSummary(coin, controller);
 
            return data; 
        } catch(error) {
            return rejectWithValue(getErrorMessage(error));
        }
    }
);

export const fetchMarketData = createAsyncThunk<IMarketDataPayload, AbortController, {rejectValue: string}>(
    'coins/fetchMarketData',
    async (controller, { rejectWithValue }) => {
         try {
             const { data } = await MarketDataApi.getMarketData(controller);
             const innerData = data.data;

             return innerData;
         } catch(error) {
             return rejectWithValue(getErrorMessage(error));
         }
    }
);

export const fetchHistoricalData = createAsyncThunk<ICompleteHistoricalData, IGetHistoricalDataParams, { rejectValue: string }>(
    'coins/fetchHistoricalData',
    async ({ payload, controller }, { rejectWithValue }) => {
        try {
            const { coin, purchasedDate, purchasedAmount } = payload;
            const params = {
                payload: { coin, purchasedDate },
                controller
            };
            
            const { data } = await HistoricalDataApi.getHistoricalData(params);

            const completeDate = {
                ...data,
                purchasedAmount,
                purchasedDate
            };

            return completeDate;
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            return rejectWithValue(errorMessage);
        }
    }
);

 interface RemoveCoinPayload {
    id: string;
};

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator}
});

const initialState: TCoinsState = {
    coinsHistory: {
        data: {},
        loading: false,
        error: null
    },
    coinList: {
        data: [],
        lastCoins: [],
        loading: false,
        error: null,
    },
    coinSummary: {
        data: null,
        loading: false,
        error: null,
    },
    marketData: {
        data: null,
        loading: false,
        error: null,
    },
    historicalData: {
        data: [],
        loading: false,
        error: null,
    },
    page: 1,
};

const coins = createSliceWithThunks({
    name: 'coins',
    initialState,
    selectors: {
        selectCoinsHistory: (state: TCoinsState) => state.coinsHistory.data,
        selectCoinsHistoryLoading: (state: TCoinsState) => state.coinsHistory.loading,
        selectCoinsHistoryError: (state: TCoinsState) => state.coinsHistory.error,
        
        selectLastCoinList: (state: TCoinsState) => state.coinList.lastCoins,
        selectCoinList: (state: TCoinsState) => state.coinList.data,
        selectCoinListLoading: (state: TCoinsState) => state.coinList.loading,
        selectCoinListError: (state: TCoinsState) => state.coinList.error,
        
        selectCoinSummary: (state: TCoinsState) => state.coinSummary.data,
        selectCoinSummaryLoading: (state: TCoinsState) => state.coinSummary.loading,
        selectCoinSummaryError: (state: TCoinsState) => state.coinSummary.error,
        
        selectMarketData: (state: TCoinsState) => state.marketData.data,
        selectMarketDataLoading: (state: TCoinsState) => state.marketData.loading,
        selectMarketDataError: (state: TCoinsState) => state.marketData.error,

        selectHistoricalData: (state: TCoinsState) => state.historicalData.data,
        selectHistoricalDataLoading: (state: TCoinsState) => state.historicalData.loading,
        selectHistoricalDataError: (state: TCoinsState) => state.historicalData.error,

        selectPage: (state: TCoinsState) => state.page,
    },

    reducers: {
        onSetNulifyCoinsHistory: (state) => {
            state.coinsHistory.data = {};
        },
        removeCoin: (state, action: PayloadAction<RemoveCoinPayload>) => {
            for (const coinId in state.coinsHistory.data) {
                if (coinId === action.payload.id && Object.keys(state.coinsHistory).length > 1) {
                    delete state.coinsHistory.data[action.payload.id];
                }
            }
        },
        onSetPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setNulifyCoins: (state) => {
            state.coinList.data = [];
            state.coinList.lastCoins = [];
            state.page = 1;
        },
        removePortfolioCoin: (state, action: PayloadAction<string>) => {
            console.log(action)
            const historicalData = state.historicalData.data.filter((coin) => coin.id !== action.payload);
            state.historicalData.data = historicalData;
        }
    },

    extraReducers: (builder) => {
        builder
            // fetchCoins
            .addCase(fetchCoins.pending, (state) => {
                state.coinList.loading = true;
                state.coinList.error = null;
            })
            .addCase(fetchCoins.fulfilled, (state, action) => {
                if (!state.coinList.lastCoins.length) {
                    state.coinList.lastCoins = action.payload;
                }
                state.coinList.data = [...state.coinList.data, ...action.payload];
                state.coinList.loading = false;
            })
            .addCase(fetchCoins.rejected, (state, action) => {
                state.coinList.error = action.payload as string;
                state.coinList.loading = false;
            })
    
            // fetchCoinHistory
            .addCase(fetchCoinHistory.pending, (state) => {
                state.coinsHistory.loading = true;
                state.coinsHistory.error = null;
            })
            .addCase(fetchCoinHistory.fulfilled, (state, action) => {
                state.coinsHistory.data = action.payload;
                state.coinsHistory.loading = false;
            })
            .addCase(fetchCoinHistory.rejected, (state, action) => {
                state.coinsHistory.error = action.payload as string;
                state.coinsHistory.loading = false;
            })
    
            // fetchMarketData
            .addCase(fetchMarketData.pending, (state) => {
                state.marketData.loading = true;
                state.marketData.error = null;
            })
            .addCase(fetchMarketData.fulfilled, (state, action) => {
                state.marketData.data = action.payload;
                state.marketData.loading = false;
            })
            .addCase(fetchMarketData.rejected, (state, action) => {
                state.marketData.error = action.payload as string;
                state.marketData.loading = false;
            })
    
            // fetchCoinSummary
            .addCase(fetchCoinSummary.pending, (state) => {
                state.coinSummary.loading = true;
                state.coinSummary.error = null;
            })
            .addCase(fetchCoinSummary.fulfilled, (state, action) => {
                state.coinSummary.data = action.payload;
                state.coinSummary.loading = false;
            })
            .addCase(fetchCoinSummary.rejected, (state, action) => {
                state.coinSummary.error = action.payload as string;
                state.coinSummary.loading = false;
            })

            // fetchPortfolioData
            .addCase(fetchHistoricalData.pending, (state) => {
                state.historicalData.loading = true;
                state.historicalData.error = null;
            })
            .addCase(fetchHistoricalData.fulfilled, (state, action) => {
                state.historicalData.data.push(action.payload);
                state.historicalData.loading = false;
            })
            .addCase(fetchHistoricalData.rejected, (state, action) => {
                state.historicalData.error = action.payload as string;
                state.historicalData.loading = false;
            }) 
    }
})

export const { removeCoin, onSetNulifyCoinsHistory, onSetPage, setNulifyCoins, removePortfolioCoin } = coins.actions;
export const {
    selectCoinsHistory,
    selectCoinsHistoryLoading,
    selectCoinsHistoryError,
    selectLastCoinList,
    selectCoinList,
    selectCoinListLoading,
    selectCoinListError,
    selectCoinSummary,
    selectCoinSummaryLoading,
    selectCoinSummaryError,
    selectMarketData,
    selectMarketDataLoading,
    selectMarketDataError,
    selectHistoricalData,
    selectHistoricalDataError,
    selectHistoricalDataLoading,
    selectPage
} = coins.selectors;

export default coins.reducer; 
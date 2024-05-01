import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ChartApi } from 'api/ChartApi';
import { getErrorMessage } from 'utils/getErrorMessage';

import { ICoinObjHistory, IFetchCoinsHistoryParams, TCoinsHistoryState  } from './type';
import { getLocationSearchParams } from 'utils/getLocationSearchParams';

export const fetchCoinHistory = createAsyncThunk<Record<string, ICoinObjHistory>, AbortController, {rejectValue: string}>(
    'coinsHistory/fetchCoinHistory',
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
            return rejectWithValue(getErrorMessage(error))
            
        }
    }   
);

const initialState: TCoinsHistoryState = {
    coinsHistory: {},
    loading: false,
    error: null
};

const coinHistorySlice = createSlice({
    name: 'coinsHistory',
    initialState,
    selectors: {
        selectCoinsHistory: state => state.coinsHistory,
    },
    reducers: {
        removeCoin(state, action) {
            for (const coinId in state.coinsHistory) {
                if (coinId === action.payload.id && Object.values(state.coinsHistory).length > 1) {
                    delete state.coinsHistory[action.payload.id]
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoinHistory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCoinHistory.fulfilled, (state, action) => {
                state.loading = false;
                state.coinsHistory = action.payload;
            })
            .addCase(fetchCoinHistory.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            })
    }
})

export const { removeCoin } = coinHistorySlice.actions;
export const { selectCoinsHistory } = coinHistorySlice.selectors;

export default coinHistorySlice.reducer;
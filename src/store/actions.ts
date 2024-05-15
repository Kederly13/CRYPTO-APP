import * as coin from './slices/coinsSlice/coinsSlice';
import * as init from './slices/initSlice/initSlice';

const actions = {
    ...coin,
    ...init
};

export default actions;
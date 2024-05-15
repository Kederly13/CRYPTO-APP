import action from 'store/actions';
import { bindActionCreators } from 'redux';

import { useAppDispatch } from './reduxHooks';

export const useActions = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators(action, dispatch);
}
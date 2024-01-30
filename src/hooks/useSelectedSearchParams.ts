import { SEARCH_PARAMS } from 'constants/searchParams';
import { useSearchParams } from 'react-router-dom';



export const useSelectedSearchParams = ( param: SEARCH_PARAMS ) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedValue = searchParams.get(param);

    const onSelectedValue = (id: string) => {
        // if (selectedValue === id) {
        //     searchParams.delete(param)
        //     setSearchParams(searchParams)
        //     return;
        // }
        searchParams.set(param, id);
        setSearchParams(searchParams);
    };
    
    return {
        selectedValue,
        onSelectedValue
    };
};

export const useMultipleSelectedSearchParams = ( param: SEARCH_PARAMS ) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedValue = searchParams.get(param);

    const onSelectedValue = (value: string) => {
        // if (selectedValue === id) {
        //     searchParams.delete(param)
        //     setSearchParams(searchParams)
        //     return;
        // }
        searchParams.set(param, value);
        setSearchParams(searchParams);
    };
    
    return {
        selectedValue,
        onSelectedValue
    };
};

export const useAllSelectedSearchParams = () => {
    const days = useSelectedSearchParams(SEARCH_PARAMS.DAYS);
    const coin = useSelectedSearchParams(SEARCH_PARAMS.COIN);

    return {
        days,
        coin
    };
};

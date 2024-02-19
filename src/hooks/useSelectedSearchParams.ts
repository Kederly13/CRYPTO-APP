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

export const useMultipleSelectedSearchParams = (param: SEARCH_PARAMS) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedValue = searchParams.get(param);
    console.log(selectedValue);
    
    const onSelectedMultipleValue = (value: string) => {
        const selectedValueArr = selectedValue ? selectedValue.split(',') : [];

        if (selectedValueArr.includes(value)) {
            const updatedSelectedValueArr = selectedValueArr.filter(item => item !== value);
            
            if (updatedSelectedValueArr.length) {
                searchParams.set(param, updatedSelectedValueArr.join(','))
            } 
        } else {
            if (selectedValueArr.length < 2) {
                selectedValueArr.push(value);
                searchParams.set(param, selectedValueArr.join(','));
            }
            
        }
        setSearchParams(searchParams);
    };
    
    return {
        selectedValue: selectedValue?.split(','),
        onSelectedMultipleValue
    };
};

export const useAllSelectedSearchParams = () => {
    const days = useSelectedSearchParams(SEARCH_PARAMS.DAYS);
    const coin = useMultipleSelectedSearchParams(SEARCH_PARAMS.COIN);

    return {
        days,
        coin
    };
};

import { SEARCH_PARAMS } from 'constants/searchParams';
import { useSearchParams } from 'react-router-dom';

export type TObjSearchParams = Record<SEARCH_PARAMS, string>;
export type TObjSearchParamsValueOf = `${SEARCH_PARAMS}`;

export interface IOptionsSetSearchParams {
    depParams?: Array<SEARCH_PARAMS>;
    multiple?: boolean;
    toggle?: boolean;
    limitToggle?: number;
    limitMultiple?: number;
}

export const useSelectedSearchParams = ( param: SEARCH_PARAMS ) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedValue = searchParams.get(param);

    const onSelectedValue = (value: string) => {
        console.log(value)
        searchParams.set(param, value);
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

    export const useSelectedObjSearchParams = () => {
        const [searchParams, setSearchParams] = useSearchParams();
        const objSearchParams = Object.fromEntries(Array.from(searchParams)) as TObjSearchParams;
        console.log(objSearchParams);
        
        const optionsDefault = {
            multiple: false,
            toggle: false,
        };
        
        const onSetObjSearchParams = (obj: TObjSearchParams, options: IOptionsSetSearchParams = optionsDefault): void => {
            const updateSearchParams: TObjSearchParams | {} = Object.values(objSearchParams).length ?
            Object.entries(objSearchParams).reduce((acc, [k, v]) => {
                Object.entries(obj).forEach(([keys, value]) => {
                    // Если в ключе пустая строка
                    if (keys === k && !value) {
                        delete acc[k as SEARCH_PARAMS];

                        return;
                    }

                    
                    if (options?.toggle && keys === k) {
                        // Если включено снятие и ключи равны
                        if (options?.multiple) {
                            // Если включено снятие и ключи равны и включен multiple
                             const vArr = v.split(',');

                             if (vArr.length !== options.limitToggle && vArr.includes(value)) {
                                // Значение не равно лимиту тогла и среди значений есть, то входящее значение
                                const updateValue = vArr.filter(item => item !== value); // удаляем если кликнули и значение уже есть

                                if (updateValue.length) {
                                    // если это не пустой массив, то мы обновляем значение ключа
                                    acc[k as SEARCH_PARAMS] = updateValue.join(',')

                                    return;
                                } else {
                                    // если это массив пустой, то мы удаляем ключ и зависимые ключи из depParams
                                    delete acc[k as SEARCH_PARAMS];

                                    if (options?.depParams?.length) {
                                        options.depParams.forEach((item) => {
                                            delete acc[item];
                                        });
                                    }

                                    return;
                                }
                             }
                        } else {
                            if (v === value) {
                                // если у ключа равны значения и не влюкчен мультипл, то ключ удаляется и зависимости тоже
                                delete acc[k as SEARCH_PARAMS];

                                if (options?.depParams?.length) {
                                    options.depParams.forEach((item) => {
                                        delete acc[item];
                                    })
                                }

                                return;
                            }
                        }
                    }

                    if (keys === k v !== value) {
                        // если равны ключи равны но новое значение
                        const vArr = v.split('');

                        if (vArr.length === options?.limitMultiple) {
                            return;
                        } else {
                            acc[k as SEARCH_PARAMS] = [...vArr, value].join('');
                        }
                    } else {
                        acc[k as SEARCH_PARAMS] = value;
                    }
                }
            })
        }

        onSetObjSearchParams(objSearchParams)

    }

export const useAllSelectedSearchParams = () => {
    const days = useSelectedSearchParams(SEARCH_PARAMS.DAYS);
    const coin = useMultipleSelectedSearchParams(SEARCH_PARAMS.COIN);

    return {
        days,
        coin
    };
};

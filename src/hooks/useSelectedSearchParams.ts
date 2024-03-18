import { SEARCH_PARAMS } from 'constants/searchParams';
import { useSearchParams } from 'react-router-dom';

export type TObjSearchParams = Record<SEARCH_PARAMS, string>;
export type TObjSearchParamsValueOf = `${SEARCH_PARAMS}`;

export interface IOptionsSetSearchParams {
    depParams?: Array<SEARCH_PARAMS>;
    multiple?: boolean;
    toggle?: boolean;
    minToggle?: number;
    limitMultiple?: number;
};


export const useSelectedObjSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const objSearchParams = Object.fromEntries(Array.from(searchParams)) as TObjSearchParams;
    
    const optionsDefault = {
        multiple: false,
        toggle: false,
    };
    
    const onSetObjSearchParams = (obj: TObjSearchParams, options: IOptionsSetSearchParams = optionsDefault): void => {
        const updateSerchParamsObj: TObjSearchParams | {} = Object.values(objSearchParams).length ?
            Object.entries(objSearchParams).reduce((acc, [k, v]) => {
                Object.entries(obj).forEach(([keys, value]) => {
                    // если в ключе пустая строка
                    if (keys === k && !value) {
                        delete acc[k as SEARCH_PARAMS];

                        return;
                    }

                    // Toggle
                    if (options?.toggle && keys === k) {
                    // если включено снятие и ключи равны
                        if (options?.multiple) {
                            // если включено снятие и включен мультипл
                            const vArr = v.split(',');

                            if (vArr.length !== options.minToggle && vArr.includes(value)) {
                                // если значение не равно лимиту тогла и среди значений есть входящее значение
                                const updateValue = vArr.filter((item) => item !== value); // удаляем если мы кликнули и значение уже есть

                                if (updateValue.length) {

                                    // если это не пустой масив, то мы обновляем значение ключа
                                    acc[k as SEARCH_PARAMS] = updateValue.join(',')

                                    return;
                                } else {
                                    // если масив пустой, то мы удаляем ключ и зависимые ключи из depParams
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
                                // если у ключа равны значение и не включен мультипл, то ключ удаляется и зависимости тоже
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

                    //Обновление
                    if (keys === k && v !== value) {
                        // если равны ключи, но новое значение
                        if (options?.multiple) {

                            const vArr = v.split(',');

                            if (vArr.length === options?.limitMultiple) {
                                // если значения равны лимиту, то выбиваем
                                return;
                            } else {
                                // если значения не равны лимиту, то присваимаем новое значение если 
                                acc[k as SEARCH_PARAMS] = [...vArr, value].join(',');
                            }
                        } else {
                            acc[k as SEARCH_PARAMS] = value;
                        }
                    }    
                })
                return {
                    ...acc
                }
            }, {...objSearchParams} as TObjSearchParams) 
            : Object.values(obj).every(value => !value) ? {} : obj;

            setSearchParams(updateSerchParamsObj);
    };

    return { objSearchParams, onSetObjSearchParams}
}


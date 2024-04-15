import { SEARCH_PARAMS } from "constants/searchParams";

export const getLocationSearchParams = (): Record<SEARCH_PARAMS, string> => {
    const { searchParams } = new URL(window?.location?.href);

    return Object.values(SEARCH_PARAMS).reduce(
        (params, param) => ({
            ...params,
            [param as SEARCH_PARAMS]: searchParams.get(param)
        }),
        {} as Record<SEARCH_PARAMS, string>
    )
};
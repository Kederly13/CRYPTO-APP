export const getConvertedDates: (data: Array<Array<number>>) => Array<Array<number>> = (data) => {
    return data.map((item) => {
        return [new Date(item[0]).getDate(), item[1]]
    })
};
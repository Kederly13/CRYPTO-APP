export const getConvertedDates: (data: Array<Array<number>>) => Array<Array<string | number>> = (data) => {
    return data.map((item) => {
        const date = new Date(item[0]);
        const dateString = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
        return [dateString, item[1]];
    });
};
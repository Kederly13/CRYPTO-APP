interface IPeiodFilterData {
    label: string;
    value: string;
};

export const peiodFilterData: IPeiodFilterData[] = [
    {
        label: '7D',
        value: '7'
    },
    {
        label: '10D',
        value: '10'
    },
    {
        label: '14D',
        value: '14'
    },
    {
        label: '1M',
        value: '30'
    },
    {
        label: '3M',
        value: '90'
    },
    {
        label: '1Y',
        value: '365'
    },
    {
        label: '3Y',
        value: '1095'
    },
]
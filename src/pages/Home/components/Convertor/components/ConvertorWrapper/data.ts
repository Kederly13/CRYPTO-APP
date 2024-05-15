export interface IFormFieldConvertor {
    name: string,
    value: string
};

export type TFormDataConvertor = Record<string, IFormFieldConvertor>

export const formDataConvertor: TFormDataConvertor = {
    firstCoin: {
        name: 'firstCoin',
        value: ''
    },
    secondCoin: {
        name: 'secondCoin',
        value: ''
    }
}
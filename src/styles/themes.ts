import { THEME } from "constants/theme";

const activeButtonStyles = {
    buttonColor: '#FFF',
    buttonActiveColor: 'rgba(97, 97, 222, 0.50)',
    activeBorderColor: '#7878FF',
};

const topHeaderStyles = {
    mainHeaderFontColor: '#FFF',
    secondaryHeaderFontColor: '#D1D1D1'
};

export const themes = {
    [THEME.DARK]: {
        HeaderTopBackgroundColor: '#1F1934',
        backgroundColor: '#13121B',
        secondaryColor: '#191926',
        buttonColor: '#232336',
        activeBorderColor: '#7878FF',
        headerBackgroundColor: '#13121B',
        secondaryFontColor: '#D1D1D1',
        mainFontColor: '#FFF',
        ...topHeaderStyles,
        formBackgroundColor: '#191926'
    },

    [THEME.LIGHT]: {
        HeaderTopBackgroundColor: '#353574',
        backgroundColor: '#F3F5F9',
        buttonColor: '#FFF',
        secondaryColor: 'rgba(204, 204, 254, 0.40)',
        headerBackgroundColor: '#FFF',
        ...topHeaderStyles,
        formBackgroundColor: '#CCCCFA66'
    }
}
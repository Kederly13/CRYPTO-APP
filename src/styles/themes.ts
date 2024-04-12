import { THEME } from "constants/theme";

export const themes = {
    [THEME.DARK]: {
        HeaderTopBackgroundColor: '#1F1934',
        backgroundColor: '#13121B',
        buttonColor: '#232336',
        buttonActiveColor: 'rgba(97, 97, 222, 0.50)',
        activeBorderColor: '#7878FF',
        topHeaderFontColor: '#FFF',
        topHeaderSecondaryFontColor: '#D1D1D1',
        headerBackgroundColor: '#13121B'
    },

    [THEME.LIGHT]: {
        HeaderTopBackgroundColor: '#353574',
        backgroundColor: '#F3F5F9',
        buttonColor: '#FFF',
        buttonActiveColor: 'rgba(97, 97, 222, 0.50)',
        activeBorderColor: '#7878FF',
        secondaryColor: 'rgba(204, 204, 254, 0.40)',
        topHeaderFontColor: '#FFF',
        topHeaderSecondaryFontColor: '#D1D1D1',
        headerBackgroundColor: '#FFF'
    }
}
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
        ...topHeaderStyles,

        //form
        formBackgroundColor: '#191926',
        formBorderColor: 'rgba(255, 255, 255, 0.05)',
        formFontColor: '#D1D1D1',
        
        //button
        buttonFontColor: '#FFF',
        buttonActiveFontColor: '#FFF',
        buttonColor: '#232337',
        buttonActiveColor: 'rgba(97, 97, 222, 0.50)',
        buttonActiveBorderColor: '#7878FF',
        
        HeaderTopBackgroundColor: '#1F1934',
        backgroundColor: '#13121B',
        secondaryColor: '#191926',
  
        activeBorderColor: '#7878FF',
        headerBackgroundColor: '#13121B',
        secondaryFontColor: '#D1D1D1',
        mainFontColor: '#FFF',
       
        ...topHeaderStyles,

        // icon
        icon: {
            default: 'rgba(255, 255, 255, 0.50)',
            active: '#FFF'
        },

        swiperCoin: {
            defaultBackground: '#191926',
            activeBackground: 'rgba(97, 97, 222, 0.50)',
            activeBorder: '#7878FF',
            boxShadow: '4px 4px 20px 8px rgba(120, 120, 255, 0.15)',
            font: '#FFF',
            activeFont: '#FFF',
            priceFont: '#D1D1D1',
            activePriceFont: '#D1D1D1'
        },
        
        chartBox: {
            background: '#191934'
        }
        
    },

    [THEME.LIGHT]: {
        mainFontColor: '#181826',

        //form
        formBackgroundColor: 'rgba(204, 204, 254, 0.40)',
        formBorderColor: 'rgba(255, 255, 255, 0.05)',
        formFontColor: '#42428B',

        //headerTop
        HeaderTopBackgroundColor: '#353574',
        headerBackgroundColor: '#FFF',
        ...topHeaderStyles,

        //background
        backgroundColor: '#F3F5F9',
        secondaryColor: 'rgba(204, 204, 254, 0.40)',
 
        //button
        buttonFontColor: '#42428B',
        buttonActiveFontColor: '#FFF',
        buttonColor: '#FFF',
        buttonActiveColor: 'rgba(97, 97, 222, 0.50)',
        buttonActiveBorderColor: '#7878FF',

        icon: {
            default: '#353574',
            active: '#353570'
        },

        swiperCoin: {
            defaultBackground: '#FFF',
            activeBackground: 'rgba(97, 97, 222, 0.50)',
            activeBorder: '#7878FF',
            font: '#181826',
            activeFont: '#FFF',
            priceFont: '#42428B',
            activePriceFont: 'rgba(255, 255, 255, 0.70)'
        },

        chartBox: {
            background: '#FFF'
        }
    }
}
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

        currencyMenu: {
            background: '#191926',
            selected: 'rgba(97, 97, 222, 0.50)'
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
            background: '#191934',
            headline: '#D1D1D1',
            number: '#FFF'
        },

        chartPrimary: '#7878FF',
        chartSecondary: '#E771FF',
        chartGradientPrimary: {
            backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D } }) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 193);
                gradient.addColorStop(0, 'rgba(116, 116, 250, 0.95)');
                gradient.addColorStop(0.3, 'rgba(116, 116, 250, 0.70)');
                gradient.addColorStop(0.7, 'rgba(116, 116, 250, 0.40)');
                gradient.addColorStop(1, 'rgba(10, 10, 20, 0.01)');
                return gradient;
            }
        },

        chartGradientSecondary: {
            backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D } }) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, 'rgba(231, 114, 255, 0.90)');
                gradient.addColorStop(0.4, 'rgba(231, 114, 255, 0.60)');
                gradient.addColorStop(0.6, 'rgba(231, 114, 255, 0.30)');
                gradient.addColorStop(1, 'rgba(231, 114, 255, 0.01)');
                return gradient;
            },
        },

        periodFilter: {
            font: '#A7A7CF',
            selectedFont: '#E4E4F1',
            background: '#232337',
            selectedBackground: 'rgba(97, 97, 222, 0.50)',
            borderColor: '#7878FF',
        },

        theader: {
            font: '#D1D1D1'
        },

        trow: {
            background: '#191926',
            font: '#FFF'
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
            default: '#353574 #353570',
            active: '#353570'
        },

        currencyMenu: {
            background: 'rgba(204, 204, 254, 0.40)',
            selected: 'rgba(97, 97, 222, 0.50)'
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
            background: '#FFF',
            headline: '#191934',
            number: '#181826'
        },

        chartGradientPrimary: {
            backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D } }) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 300)
                gradient.addColorStop(0, 'rgba(116, 116, 250, 0.95)');
                gradient.addColorStop(0.3, 'rgba(116, 116, 250, 0.70)');
                gradient.addColorStop(0.7, 'rgba(116, 116, 250, 0.40)');
                gradient.addColorStop(1, 'rgba(10, 10, 20, 0.01)');
                return gradient;
            }
        },

        chartGradientSecondary: {
            backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D } }) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, '#A75EE0');
                gradient.addColorStop(1, 'rgba(190, 113, 250, 0.01)');
                return gradient;    
            }
        },

        periodFilter: {
            font: '#42428B',
            selectedFont: '#181826',
            background: 'rgba(204, 204, 254, 0.40)',
            selectedBackground: 'rgba(97, 97, 222, 0.50)',
            borderColor: '#7878FF',
        },

        theader: {
            font: '#42428B'
        },

        trow: {
            background: '#FFF',
            font: '#232337'
        }
    }
}
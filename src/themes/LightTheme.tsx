import { Theme } from "../utils/types";

export const LightTheme: Theme = {
    colors: {
        cream: '#F3ECDA',
        khaki: '#C4AC95',
        tan: '#94553D',
        peach: '#FFCBA4',
        peachPuff: '#FFD5B5'

    },
    sizing: {
        spacing: {
            xs: '4px',
            sm: '8px',
            md: '16px',
            lg: '32px',
            xl: '64px'
        }
    },
    typography: {
        fontFamily: '', // to be decided
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.25rem',
            xl: '1.5rem',
            xxl: '2rem'
        },
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            bold: 700
          }
    }
}
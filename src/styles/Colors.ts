import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {  
        colors: {
            Cyan: string;
            DarkViolet: string;
            Red: string;
            Gray: string;
            White: string;
            GrayishViolet: string;
            VeryDarkBlue: string;
            VeryDarkViolet: string;
        };
    }
}

export const theme: DefaultTheme = {
    colors: {
        // ### Primary
        Cyan: 'hsl(180, 66%, 49%)',
        DarkViolet: 'hsl(257, 27%, 26%)',
        Red: 'hsl(0, 87%, 67%)',

        // ### Neutral
        Gray: 'hsl(0, 0%, 75%)',
        White: '#FFF',
        GrayishViolet: 'hsl(257, 7%, 63%)',
        VeryDarkBlue: 'hsl(255, 11%, 22%)',
        VeryDarkViolet: 'hsl(260, 8%, 14%)'
    }
}
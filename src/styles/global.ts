import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    
        font-family: 'Poppins', sans-serif;
    }

    button{
        border: none;
        outline: none;
        cursor: pointer;
    }
`;

export const Container = styled.div``;

export const Content = styled.div`
    @media(min-width: 320px){
        padding: 32px 20px;
    }

    @media(min-width: 768px){
        padding: 32px 120px;
    }
`;

export const WrapperAdvancedStatistics = styled.div`
    /* background: ${props => props.theme.colors.Gray}; */
    background-color: #eeeeee;
`;

export const WrapperBoost = styled.div`
    background-color: ${props => props.theme.colors.DarkViolet};
    background-repeat: no-repeat;
    background-size: 100% 100%;

    @media(min-width: 320px){
        background-image: url('/bg-boost-mobile.svg');
    }

    @media(min-width: 900px){
        background-image: url('/bg-boost-desktop.svg');
    }
`;

export const WrapperFooter = styled.div`
    background-color: ${props => props.theme.colors.VeryDarkViolet};
`;
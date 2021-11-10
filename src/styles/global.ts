import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
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

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    @media(min-width: 320px){
        padding: 32px 40px;
    }

    @media(min-width: 768px){
        padding: 32px 80px;
    }
`;
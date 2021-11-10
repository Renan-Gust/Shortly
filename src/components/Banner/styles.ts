import styled from 'styled-components'

export const Container = styled.div``;

export const Main = styled.main`
    display: flex;
    justify-content: space-between;

    @media(min-width: 320px){
        flex-direction: column;
        margin-top: 0;
    }

    @media(min-width: 1024px){
        flex-direction: row;
        margin-top: 96px;
    }
`;

export const Section = styled.section`
    flex: 0.8;

    h1{
        color: ${props => props.theme.colors.VeryDarkBlue};
        font-size: 4rem;
    }

    p{
        /* Não está funcionando? */
        font-weight: 500;
        color: ${props => props.theme.colors.Gray};
        margin: 8px 0 16px;
    }
`;

export const Figure = styled.figure``;
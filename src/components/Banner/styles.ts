import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    margin-bottom: 116px;
`;

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 320px){
        flex-direction: column;
        margin-top: 0;
    }

    @media(min-width: 1015px){
        flex-direction: row;
        gap: 10px;
        margin-top: 96px;
    }
`;

export const Section = styled.section`
    @media(min-width: 320px){
        order: 1;
        text-align: center;
    }

    @media(min-width: 1015px){
        order: 0;
        text-align: start;
    }

    @media(min-width: 1413px){
        flex: 0.8;
    }

    h1{
        color: ${props => props.theme.colors.VeryDarkBlue};

        @media(min-width: 320px){
            font-size: 2.5rem;
            margin: 16px 0 8px;
        }

        @media(min-width: 1100px){
            font-size: 4rem;
        }
    }

    p{
        /* font-weight Não está funcionando? */
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 30px;
        color: ${props => props.theme.colors.Gray};
        margin-bottom: 24px;
    }
`;

export const Figure = styled.figure`
    img{
        width: 100%;
    }
    
    @media(min-width: 1413px){
        img{
            width: 550px;
        }
    }

    @media(min-width: 1530px){
        img{
            width: initial;
        }
    }
`;
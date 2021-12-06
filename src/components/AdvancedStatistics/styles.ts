import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;

    @media(min-width: 320px){
        width: 100%;
    }

    @media(min-width: 1340px){
        width: 86%;
    }
`;

export const SectionTitle = styled.section`
    width: 500px;
    text-align: center;

    h1{
        font-weight: 900;
        font-size: 2rem;
        color: ${props => props.theme.colors.VeryDarkBlue};
    }

    p{
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 30px;
        color: ${props => props.theme.colors.Gray};
        margin-top: 16px;
    }
`;

export const Section = styled.section`
    display: flex;
    gap: 24px;
    margin-top: 64px;

    @media(min-width: 1500px) {
        .detailedRecordsMargin{
            margin-top: 30px;
        }
    }

    @media(min-width: 1500px) {
        .fullyCustomizableMargin{
            margin-top: 60px;
        }
    }
`;

export const Article = styled.article`
    background-color: ${props => props.theme.colors.White};
    width: 350px;
    height: 255px;

    border-radius: 6px;
`;

export const Figure = styled.figure`
    position: relative;

    div {
        background-color: ${props => props.theme.colors.DarkViolet};
        border-radius: 50%;

        width: 60px;
        height: 60px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: -5px;

        img{
            width: 30px;
            height: 30px;
        }
    }
`;

export const Content = styled.div`
    padding: 24px;

    h3{
        padding: 16px 0;
        color: ${props => props.theme.colors.VeryDarkBlue};
        font-weight: 900;
    }

    p{
        line-height: 24px;
        color: ${props => props.theme.colors.Gray};
    }
`;
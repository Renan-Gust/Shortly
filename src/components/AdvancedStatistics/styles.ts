import styled from 'styled-components'

export const Container = styled.div``;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;

    @media(min-width: 320px){
        width: 100%;
    }

    @media(min-width: 1420px){
        width: 79%;
    }
`;

export const SectionTitle = styled.section`
    max-width: 500px;
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
    align-items: center;

    @media(min-width: 320px) {
        flex-direction: column;
        margin-top: 90px;
    }

    @media(min-width: 1240px) {
        flex-direction: row;
        margin-top: 56px;

        .detailedRecordsMargin{
            margin-top: 60px;
        }

        .fullyCustomizableMargin{
            margin-top: 120px;
        }
    }
`;

export const Article = styled.article`
    background-color: ${props => props.theme.colors.White};
    width: 320px;
    height: 255px;

    border-radius: 6px;
`;

export const Figure = styled.figure`
    position: relative;

    div {
        background-color: ${props => props.theme.colors.DarkViolet};
        border-radius: 50%;

        width: 70px;
        height: 70px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: -12px;

        @media(min-width: 320px) {
            left: 37%;
        }

        @media(min-width: 1240px) {
            left: 0;
        }

        img{
            width: 40px;
            height: 40px;
        }
    }
`;

export const Content = styled.div`
    padding: 24px;

    h3{
        margin-top: 16px;
        padding: 16px 0;
        color: ${props => props.theme.colors.VeryDarkBlue};
        font-weight: 900;
    }

    p{
        line-height: 24px;
        color: ${props => props.theme.colors.Gray};
        font-size: 1.1rem;
    }

    @media(min-width: 320px) {
        text-align: center;
    }

    @media(min-width: 1240px) {
        text-align: start;
    }
`;

export const Div = styled.div`
    background: ${props => props.theme.colors.Cyan};

    @media(min-width: 320px) {
        height: 60px;
        width: 10px;
    }

    @media(min-width: 1240px) {
        width: 24px;
        height: 10px;
    }
`;
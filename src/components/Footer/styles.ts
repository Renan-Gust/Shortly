import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    padding: 40px 0;

    @media(min-width: 320px){
        width: 100%;
    }

    @media(min-width: 1420px){
        width: 79%;
    }
`;

export const Nav = styled.nav`
    display: flex;

    @media(min-width: 320px){
        flex-direction: column;
        align-items: center;
    }
`;

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    flex: 1;

    @media(min-width: 320px){
        flex-direction: column;
        gap: 40px;
    }
`;

export const Figure = styled.figure`
    flex: 0.5;
`;

export const Section = styled.section`
    width: 100%;

    @media(min-width: 320px){
        text-align: center;
    }

    h4{
        margin-bottom: 24px;
        color: ${props => props.theme.colors.White};
    }

    li{
        list-style-type: none;

        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    a{
        display: inline-block;
        margin-right: 24px;
    }
`;

export const Networks = styled.section`
    a{
        display: inline-block;
        margin-right: 24px;
    }
`;

export const HyperLink = styled.a`
    color: ${props => props.theme.colors.Gray};

    &:hover{
        transition: all 0.3s ease;
        color: ${props => props.theme.colors.Cyan};
    }
`;
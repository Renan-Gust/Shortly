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

    @media(min-width: 1070px){
        flex-direction: row;
    }
`;

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    flex: 1;

    @media(min-width: 320px){
        flex-direction: column;
    }

    @media(min-width: 768px){
        flex-direction: row;
        width: 100%;
    }
`;

export const Figure = styled.figure`
    flex: 0.5;
`;

export const Section = styled.section`
    width: 100%;

    @media(min-width: 320px){
        margin-top: 40px;
        text-align: center;
    }

    @media(min-width: 768px){
        width: initial;
        text-align: start;
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
`;

export const Networks = styled.section`
    a{
        display: inline-block;

        i{
            color: ${props => props.theme.colors.White};
            font-size: 1.7rem;

            &:hover{
                transition: all 0.3s ease;
                color: ${props => props.theme.colors.Cyan};
            }
        }
    }

    a:nth-child(1),
    a:nth-child(2),
    a:nth-child(3) {
        margin-right: 24px;
    }

    @media(min-width: 320px){
        margin-top: 40px;
    }
`;

export const HyperLink = styled.a`
    color: ${props => props.theme.colors.Gray};

    &:hover{
        transition: all 0.3s ease;
        color: ${props => props.theme.colors.Cyan};
    }
`;
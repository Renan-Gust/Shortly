import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    padding: 40px 0;

    @media(min-width: 320px){
        width: 100%;
    }

    @media(min-width: 1420px){
        width: 86%;
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;


`;

export const Figure = styled.figure``;

export const Section = styled.section`
    h4{
        margin-bottom: 24px;
    }

    li{
        list-style-type: none;

        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

export const Networks = styled.section``;

export const HyperLink = styled.a``;
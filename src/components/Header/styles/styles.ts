import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    gap: 32px;

    @media(min-width: 320px){
        justify-content: space-between;
    }

    @media(min-width: 1024px){
        justify-content: initial;
    }
`;

export const Figure = styled.figure`
    padding-top: 4px;
`;

export const Menu = styled.div<{ openMenu: Boolean }>`
    width: 35px;
    height: 30px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .bar{
        height: 4px;
        width: 100%;

        background-color: ${props => props.theme.colors.GrayishViolet};
        transition: 0.3s ease;
    }

    #bar1{
        transform: ${props => props.openMenu ? 'translateY(4px) rotate(-45deg)': 'translateY(-4px)'};
    }

    #bar2{
        opacity: ${props => props.openMenu ? '0' : '1'};
    }

    #bar3{
        transform: ${props => props.openMenu ? 'translateY(-4px) rotate(45deg)': 'translateY(4px)'};
    }

    @media(min-width: 1024px){
        display: none;
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    li{
        list-style-type: none;
    }

    @media(min-width: 320px){
        display: none;
    }

    @media(min-width: 1024px){
        display: flex;
    }
`;

export const HyperLink = styled.a<{ color: string; }>`
    margin-right: 32px;
    color: ${props => props.color};
    font-weight: 700;

    &:hover{
        transition: all 0.3s ease;
        color: ${props => props.theme.colors.VeryDarkViolet}
    }
`;
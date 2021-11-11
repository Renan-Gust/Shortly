import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    gap: 32px;
`;

export const Figure = styled.figure`
    padding-top: 4px;
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
import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    gap: 32px;
`;

export const Figure = styled.figure``;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    li{
        list-style-type: none;
    }
`;

export const HyperLink = styled.a`
    margin-right: 16px;
    color: ${props => props.theme.colors.Gray};
    font-weight: 700;
`;

export const Left = styled.div``;
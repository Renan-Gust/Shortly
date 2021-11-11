import styled from "styled-components";

export const Nav = styled.nav`
    height: 360px;
    background: ${props => props.theme.colors.DarkViolet};
    border-radius: 10px;

    position: absolute;
    width: 100%;
    top: 90px;
`;

export const Main = styled.main`
    padding: 40px 20px 0;
    
    ul:first-child{
        border-bottom: 1px solid ${props => props.theme.colors.GrayishViolet};
        margin-bottom: 24px;
    }

    li{
        list-style-type: none;
        padding-bottom: 24px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;

        a{
            margin: 0;
            font-size: 1.3rem;
        }

        button{
            width: 100%;
            padding: 13px 24px;
            font-size: 1.2rem;
        }
    }
`;
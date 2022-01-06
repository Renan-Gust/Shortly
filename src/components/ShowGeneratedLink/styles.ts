import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    bottom: 70px;
    margin: 0 auto 70px;

    > div:not(:first-child) {
        margin-top: 10px;
    }

    @media(min-width: 320px){
        width: 100%;
    }

    @media(min-width: 1420px){
        width: 79%;
    }
`;

export const GeneratedLinkWrapper = styled.div`
    background: white;
    border-radius: 8px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 22px;

    a{
        color: ${props => props.theme.colors.VeryDarkViolet};
        font-weight: 500;
    }
`;

export const GeneratedLink = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;

    a{
        color: ${props => props.theme.colors.Cyan};
        font-weight: 600;
    }

    button{
        padding: 12px 30px;

        border-radius: 6px;
        border: none;
        cursor: pointer;

        letter-spacing: 0.5px;
        font-weight: 700;
        font-size: 0.9rem;
        color: white;
        background: ${props => props.theme.colors.Cyan};

        &:hover{
            transition: all 0.3s ease;
            filter: opacity(0.6);
        }
    }
`;
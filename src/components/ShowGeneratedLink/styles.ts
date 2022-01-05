import styled from 'styled-components'

export const Container = styled.div`
    top: 38px;
    position: relative;

    margin-bottom: 140px;
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

    p{
        font-weight: 500;
    }
`;

export const GeneratedLink = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;

    p{
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
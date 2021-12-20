import styled from 'styled-components'

export const Container = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 24px 0;

    text-align: center;

    h3{
        color: ${props => props.theme.colors.White};
        font-weight: 900;
        margin-bottom: 16px;

        @media(min-width: 320px) {
            font-size: 1.7rem;
        }

        @media(min-width: 768px) {
            font-size: 2rem;
        }
    }
`;
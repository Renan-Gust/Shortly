import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 24px;
    border-radius: 50px;
    background: ${props => props.theme.colors.Cyan};
    color: white;
    font-weight: 700;
    letter-spacing: 0.5px;

    &:hover{
        transition: all 0.3s ease;
        filter: opacity(0.6);
    }
`;
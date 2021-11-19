import styled from 'styled-components'

export const Container = styled.div`
    background: url('/bg-shorten-desktop.svg') no-repeat 100% 100%;
    /* background-repeat: no-repeat; */
    /* background-size: 100% 100%; */

    width: 50%;
    padding: 32px;
    margin: 0 auto;

    border-radius: 6px;
`;

export const Form = styled.form`
    width: 100%;
    height: 45px;

    display: flex;
    gap: 12px;
`;

export const TextInput = styled.input`
    border-radius: 6px;
    border: none;
    outline: 0;

    height: 100%;
    width: 80%;
    padding-left: 16px;

    font-weight: 600;
    font-size: 0.9rem;
`;

export const SubmitInput = styled.input`
    height: 100%;
    width: 20%;

    border-radius: 6px;
    border: none;
    cursor: pointer;

    letter-spacing: 0.5px;
    font-weight: 700;
    font-size: 0.9rem;
    color: white;
    background: ${props => props.theme.colors.Cyan}
`;
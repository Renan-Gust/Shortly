import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.theme.colors.DarkViolet};
    background-repeat: no-repeat;

    padding: 32px 32px 26px 32px;
    margin: 0 auto;

    border-radius: 8px;

    position: relative;

    @media(min-width: 320px){
        width: 100%;
        bottom: 116px;

        background-image: url('/bg-shorten-mobile.svg');
        background-size: 100% 100%;
    }

    @media(min-width: 900px){
        bottom: 87px;
        background-image: url('/bg-shorten-desktop.svg');
        background-size: cover;
    }

    @media(min-width: 1340px){
        width: 86%;
    }
`;

export const Form = styled.form`
    width: 100%;

    display: flex;
    gap: 12px;

    @media(min-width: 320px){
        flex-direction: column;
    }

    @media(min-width: 900px){
        flex-direction: row;
    }
`;

export const Area = styled.div`
    @media(min-width: 320px){
        width: 100%;
    }

    @media(min-width: 900px){
        width: 80%;
    }
`;

export const TextInput = styled.input<{ empty: boolean}>`
    width: 100%;
    height: 45px;

    border-radius: 6px;
    border: none;
    outline: 0;

    padding-left: 16px;

    font-weight: 500;
    font-size: 0.9rem;

    border: 2.5px solid ${props => props.empty ? props.theme.colors.Red : 'none'};

    ::-webkit-input-placeholder {
        color: ${props => props.empty ? props.theme.colors.Red : 'none'};
    }
`;

export const SubmitInput = styled.input`
    width: 20%;

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

    @media(min-width: 320px){
        width: 100%;
        height: 45px;
    }

    @media(min-width: 900px){
        width: 20%;
    }
`;

export const Warning = styled.span`
    color: ${props => props.theme.colors.Red};
    font-size: 0.8rem;

    display: inline-block;
    margin-top: 8px;
`;
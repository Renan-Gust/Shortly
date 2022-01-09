import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    margin: 0 auto;

    > div:not(:first-child) {
        margin-top: 10px;
    }

    @media(min-width: 320px){
        width: 100%;
        bottom: 90px;
    }

    @media(min-width: 900px){
        bottom: 70px;
    }

    @media(min-width: 1420px){
        width: 79%;
        margin-bottom: 70px;
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
    flex-wrap: wrap;

    @media(min-width: 900px){
        flex-wrap: nowrap;
    }

    div:first-child{
        padding: 14px 22px;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        @media(min-width: 320px){
            max-width: 39ch;
        }

        @media(min-width: 1420px){
            max-width: 50ch;
        }
    }

    a{
        color: ${props => props.theme.colors.VeryDarkBlue};
        font-weight: 600;
    }
`;

export const Wrapper = styled.div``;

export const GeneratedLink = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
    padding: 14px 22px;

    @media(min-width: 320px){
        padding-top: 12px;
        gap: 12px;

        border-top: 2px solid #eeeeee;
    }

    @media(min-width: 900px){
        padding-top: 14px;
        border-top: none;

        flex: 0;
        gap: 18px;
        flex-wrap: nowrap;
    }

    a{
        color: ${props => props.theme.colors.Cyan};
        font-weight: 600;
    }

    button{
        padding: 12px 30px;
        width: 100%;

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

        @media(min-width: 900px){
            width: initial;
        }
    }

    button.copied{
        background: ${props => props.theme.colors.DarkViolet};

        &:hover{
            filter: opacity(1);
        }
    }
`;
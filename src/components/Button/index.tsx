import { Button as ButtonGetStarted } from './styles'

type Props = {
    content: string;
}

export function Button({ content }: Props) {
    return(
        <ButtonGetStarted>
            {content}
        </ButtonGetStarted>
    )
}
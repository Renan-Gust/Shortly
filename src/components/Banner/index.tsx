import * as C from './styles'

import { Button } from '../Button'
import { Header } from '../Header'

export function Banner() {
    return(
        <C.Container>
            <Header />

            <C.Main>
                <C.Section>
                    <h1>More than just shorter links</h1>
                    <p>Build your bland's recognition and get detailed insights on how your links are performing.</p>
                    <Button content="Get Started" />
                </C.Section>

                <C.Figure>
                    <img src="/illustration-working.svg" alt="illustration-working.svg" />
                </C.Figure>
            </C.Main>
        </C.Container>
    )
}
import * as C from './styles'

export function ShortenLink() {
    return(
        <C.Container>
            <C.Form>
                <C.TextInput placeholder="Shorten a link here..."></C.TextInput>
                <C.SubmitInput type="submit" value="Shorten It!"></C.SubmitInput>
            </C.Form>
        </C.Container>
    )
}
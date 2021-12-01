import { useEffect, useState, FormEvent } from 'react'
import * as C from './styles'

export function ShortenLink() {
    const [link, setLink] = useState('')
    const [isEmpty, setIsEmpty] = useState(false)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if(link === '') {
            setIsEmpty(true)
        }
    }

    useEffect(() => {
        setIsEmpty(!true)
    }, [link])

    return(
        <C.Container>
            <C.Form onSubmit={handleSubmit}>
                <C.Area>
                    <C.TextInput 
                        placeholder="Shorten a link here..." 
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        empty={isEmpty}
                    />
                    
                    { isEmpty ? <C.Warning>Please add a link</C.Warning> : '' }
                </C.Area>

                <C.SubmitInput type="submit" value="Shorten It!" />
            </C.Form>
        </C.Container>
    )
}
import { useEffect, useState, FormEvent } from 'react'
import * as C from './styles'

type linkGenerated = {

}

export function ShortenLink() {
    const [link, setLink] = useState('')
    const [isEmpty, setIsEmpty] = useState(false)
    const [linkGenerated, setLinkGenerated] = useState<linkGenerated>({})

    useEffect(() => {
        (async () => {
            const request = await fetch(`https://api.shrtco.de/v2/shorten?url=https://www.mtrek.com.br`)
            const { ok, result } = await request.json()
            console.log(ok, result)
        })()
    }, [])


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
                        type="url"
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
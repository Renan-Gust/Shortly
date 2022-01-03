import { useEffect, useState, FormEvent } from 'react'
import * as C from './styles'

type linkGenerated = {
    originalLink: string;
    fullShortLink: string;
}

export function ShortenLink() {
    const [link, setLink] = useState('https://www.mtrek.com.br')
    const [isEmpty, setIsEmpty] = useState(false)
    const [linkGenerated, setLinkGenerated] = useState<linkGenerated[]>([])

    async function teste(){
        const request = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        const { ok, result } = await request.json()
        
        if(ok){
            // setLinkGenerated([
            //     {
            //         originalLink: result.original_link,
            //         fullShortLink: result.full_short_link
            //     }
            // ])
            addNewLink(result)
        }
    }

    async function handleSubmit(e: FormEvent,) {
        e.preventDefault()

        if(link === '') setIsEmpty(true)

        teste()
    }

    function addNewLink(result: any) {
        const newLinkGenerated = [
            ...linkGenerated,
            {
                originalLink: result.original_link,
                fullShortLink: result.full_short_link
            }
        ]

        setLinkGenerated(newLinkGenerated)

        console.log(newLinkGenerated)
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
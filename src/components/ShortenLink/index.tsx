import { useEffect, useState, FormEvent } from 'react'

import * as C from './styles'

import { api } from '../../services/api'
import { ShowGeneratedLink } from '../ShowGeneratedLink'

type GeneratedLink = {
    originalLink: string;
    fullShortLink: string;
}

export function ShortenLink() {
    const [link, setLink] = useState('https://www.mtrek.com.br')
    const [isEmpty, setIsEmpty] = useState(false)
    const [generatedLink, setGeneratedLink] = useState<GeneratedLink[]>([])

    async function generatedLinkFunction(){
        const { ok, result } = await api.GenerateLink(link)
        if(ok) addNewLink(result)
    }

    async function handleSubmit(e: FormEvent,) {
        e.preventDefault()
        if(link === '') setIsEmpty(true)

        generatedLinkFunction()
    }

    function addNewLink(result: any) {
        const newGeneratedLink = [
            ...generatedLink,
            {
                originalLink: result.original_link,
                fullShortLink: result.full_short_link
            }
        ]

        setGeneratedLink(newGeneratedLink)
        console.log(newGeneratedLink)
    }

    useEffect(() => {
        setIsEmpty(!true)
    }, [link])

    return(
        <C.Wrapper>
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

            <ShowGeneratedLink />
        </C.Wrapper>
    )
}
import { useEffect, useState, FormEvent } from 'react'

import * as C from './styles'

import { api } from '../../services/api'
import { ShowGeneratedLink } from '../ShowGeneratedLink'
import { GeneratedLink } from '../../Types/generatedLink'

export function ShortenLink() {
    const [link, setLink] = useState('')
    const [isEmpty, setIsEmpty] = useState(false)
    const [loading, setLoading] = useState(false)
    const [generatedLink, setGeneratedLink] = useState<GeneratedLink[]>([])

    async function generatedLinkFunction(){
        setLoading(true)
        const { ok, result } = await api.GenerateLink(link)
        setLoading(false)
        if(ok) addNewLink(result)
    }

    async function handleSubmit(e: FormEvent,) {
        e.preventDefault()
        if(link === '') setIsEmpty(true)

        generatedLinkFunction()
        setLink('')
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
    }

    useEffect(() => {
        setIsEmpty(!true)
    }, [link])

    return(
        <>
            <C.Wrapper className="shortenLinkWrapper">
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
                            { loading ? "Carregando" : '' }
                        </C.Area>

                        <C.SubmitInput type="submit" value="Shorten It!" />
                    </C.Form>
                </C.Container>
            </C.Wrapper>

            <ShowGeneratedLink showGeneratedLink={generatedLink} />
        </>
    )
}
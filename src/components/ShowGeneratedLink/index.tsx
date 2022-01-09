import * as C from './styles'

import { GeneratedLink } from '../../Types/generatedLink'

type ShowGeneratedLinkProps = {
    showGeneratedLink: GeneratedLink[];
}

export const ShowGeneratedLink = ({ showGeneratedLink }: ShowGeneratedLinkProps) => {
    function handleCopyShortenLink(e: any) {
        const shortenLink = e.parentNode.children[0].textContent
        e.textContent = "Copied!"
        e.classList.add("copied")

        navigator.clipboard.writeText(shortenLink)

        setTimeout(() => {
            e.textContent = "Copy"
            e.classList.remove("copied")
        }, 2000)
    }

    return(
        <C.Container className="ShowGeneratedLink">
            {showGeneratedLink.map((item, index) => (
                <C.GeneratedLinkWrapper key={index}>
                    <C.Content>
                        <div>
                            <a href={item.originalLink} target="_blank">
                                {item.originalLink}
                            </a>
                        </div>
            
                        <C.GeneratedLink>
                            <a href={item.fullShortLink} target="_blank">
                                {item.fullShortLink}
                            </a>
                            <button onClick={(e) => handleCopyShortenLink(e.target)}>Copy</button>
                        </C.GeneratedLink>
                    </C.Content>
                </C.GeneratedLinkWrapper>
            ))}
        </C.Container>
    )
}
import * as C from './styles'

import { GeneratedLink } from '../../Types/generatedLink'

type ShowGeneratedLinkProps = {
    showGeneratedLink: GeneratedLink[];
}

export const ShowGeneratedLink = ({ showGeneratedLink }: ShowGeneratedLinkProps) => {
    return(
        <C.Container className="ShowGeneratedLink">
            {showGeneratedLink.map((item, index) => (
                <C.GeneratedLinkWrapper key={index}>
                    <C.Content>
                        <a href={item.originalLink} target="_blank">
                            {item.originalLink}
                        </a>
            
                        <C.GeneratedLink>
                            <a href={item.fullShortLink} target="_blank">
                                {item.fullShortLink}
                            </a>
                            <button>Copy</button>
                        </C.GeneratedLink>
                    </C.Content>
                </C.GeneratedLinkWrapper>
            ))}
        </C.Container>
    )
}
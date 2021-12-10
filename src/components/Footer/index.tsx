import  * as C from './styles'

export function Footer() {
    return(
        <C.Container>
            <C.Nav>
                <C.Figure>
                    <img src="/logo.svg" alt="logo.svg" />
                </C.Figure>

                <C.Section>
                    <h4>Features</h4>
                    <ul>
                        <li>
                            <C.HyperLink href="">Link Shortening</C.HyperLink>
                            <C.HyperLink href="">Branded Links</C.HyperLink>
                            <C.HyperLink href="">Analytics</C.HyperLink>
                        </li>
                    </ul>
                </C.Section>

                <C.Section>
                    <h4>Resources</h4>
                    <ul>
                        <li>
                            <C.HyperLink href="">Blog</C.HyperLink>
                            <C.HyperLink href="">Developers</C.HyperLink>
                            <C.HyperLink href="">Support</C.HyperLink>
                        </li>
                    </ul>
                </C.Section>

                <C.Section>
                    <h4>Company</h4>
                    <ul>
                        <li>
                            <C.HyperLink href="">About</C.HyperLink>
                            <C.HyperLink href="">Our Team</C.HyperLink>
                            <C.HyperLink href="">Careers</C.HyperLink>
                            <C.HyperLink href="">Contact</C.HyperLink>
                        </li>
                    </ul>
                </C.Section>

                <C.Networks>
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </C.Networks>

            </C.Nav>
        </C.Container>
    )
}
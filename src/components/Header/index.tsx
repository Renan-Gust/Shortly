import * as C from './styles'

import { Button } from '../Button'

export function Header() {
    return(
        <C.Header>
            <C.Figure>
                <img src="/logo.svg" alt="logo" />
            </C.Figure>

            <C.Nav>
                <ul>
                    <li>
                        <C.HyperLink href="">Features</C.HyperLink>
                        <C.HyperLink href="">Pricing</C.HyperLink>
                        <C.HyperLink href="">Resources</C.HyperLink>
                    </li>
                </ul>

                <C.Left>
                    <C.HyperLink href="">Login</C.HyperLink>
                    <Button content="Sign Up" />
                </C.Left>
            </C.Nav>
        </C.Header>
    )
}
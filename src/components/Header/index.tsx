import * as C from './styles/styles'
import * as M from './styles/mobile'

import { Button } from '../Button'
import { theme } from '../../styles/Colors'

export function Header() {
    return(
        <>
            <C.Header>
                <C.Figure>
                    <img src="/logo.svg" alt="logo" />
                </C.Figure>

                <C.Nav>
                    <ul>
                        <li>
                            <C.HyperLink href="" color={theme.colors.Gray}>Features</C.HyperLink>
                            <C.HyperLink href="" color={theme.colors.Gray}>Pricing</C.HyperLink>
                            <C.HyperLink href="" color={theme.colors.Gray}>Resources</C.HyperLink>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <C.HyperLink href="" color={theme.colors.Gray}>Login</C.HyperLink>
                            <Button content="Sign Up" />
                        </li>
                    </ul>
                </C.Nav>
            </C.Header>

        <HeaderMobile />
        </>
    )
}

function HeaderMobile() {
    return(
        <M.Nav>
            <M.Main>
                <ul>
                    <li>
                        <C.HyperLink href="" color={theme.colors.White}>Features</C.HyperLink>
                        <C.HyperLink href="" color={theme.colors.White}>Pricing</C.HyperLink>
                        <C.HyperLink href="" color={theme.colors.White}>Resources</C.HyperLink>
                    </li>                
                </ul>

                <ul>
                    <li>
                        <C.HyperLink href="" color={theme.colors.White}>Login</C.HyperLink>
                        <Button content="Sign Up" />
                    </li>
                </ul>
            </M.Main>
        </M.Nav>
    )
}
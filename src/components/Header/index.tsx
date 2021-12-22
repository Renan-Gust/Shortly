import { useState } from 'react'

import * as C from './styles/styles'
import * as M from './styles/mobile'

import { Button } from '../Button'
import { theme } from '../../styles/Colors'

export function Header() {
    const [isActivated, setIsActivated] = useState(false)

    function handleOpenMenu(){
        setIsActivated(!isActivated)
    }

    return(
        <>
            <C.Header>
                <C.Figure>
                    <img src="/logo.svg" alt="logo" />
                </C.Figure>

                <C.Menu onClick={handleOpenMenu} openMenu={isActivated}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </C.Menu>

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

            <HeaderMobile isActivated={isActivated} />
        </>
    )
}

function HeaderMobile({ isActivated }: any) {  
    return(
        <M.Nav openMenu={isActivated}>
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
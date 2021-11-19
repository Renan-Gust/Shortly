import { GlobalStyle, Container, Content, WrapperAdvancedStatistics } from "./styles/global"
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Colors'

import { Banner } from "./components/Banner"
import { AdvancedStatistics } from "./components/AdvancedStatistics"

function App() {
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <Content>
                    <Banner />
                </Content>

                <WrapperAdvancedStatistics>
                    <Content>
                        <AdvancedStatistics />
                    </Content>
                </WrapperAdvancedStatistics>
                
            </Container>
        </ThemeProvider>
    )
}

export default App
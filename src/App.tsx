import { GlobalStyle, Container, Content, WrapperAdvancedStatistics, WrapperBoost, WrapperFooter } from "./styles/global"
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Colors'

import { Banner } from "./components/Banner"
import { AdvancedStatistics } from "./components/AdvancedStatistics"
import { Footer } from "./components/Footer"
import { Boost } from "./components/Boost"

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

                <WrapperBoost>
                    <Content>
                        <Boost />
                    </Content>
                </WrapperBoost>

                <WrapperFooter>
                    <Content>
                        <Footer />
                    </Content>
                </WrapperFooter>
                
            </Container>
        </ThemeProvider>
    )
}

export default App
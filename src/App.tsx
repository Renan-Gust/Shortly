import { GlobalStyle, Container, Content } from "./styles/global"
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/Colors'

import { Banner } from "./components/Banner"

function App() {
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <Content>
                    <Banner />
                </Content>
            </Container>
        </ThemeProvider>
    )
}

export default App
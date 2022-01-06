import { ShortenLink } from '../ShortenLink'
import * as C from './styles'

export function AdvancedStatistics() {
    return(
        <C.Container className="AdvancedStatistics">
            <ShortenLink />
            <C.Main>
                <C.SectionTitle>
                    <h1>Advanced Statistics</h1>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </C.SectionTitle>

                <C.Section>
                    <C.Article>
                        <C.Content>
                            <C.Figure>
                                <div>
                                    <img src="/icon-brand-recognition.svg" alt="brand-recognition" />
                                </div>
                            </C.Figure>

                            <h3>Brand Recognition</h3>
                            <p>Boost your brand recognition with each link. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                        </C.Content>
                    </C.Article>

                    <C.Div></C.Div>

                    <C.Article className="detailedRecordsMargin">
                        <C.Content>
                            <C.Figure>
                                <div>
                                    <img src="/icon-detailed-records.svg" alt="detailed-records" />
                                </div>
                            </C.Figure>

                            <h3>Detailed Records</h3>
                            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps informe better decisions.</p>
                        </C.Content>
                    </C.Article>

                    <C.Div></C.Div>

                    <C.Article className="fullyCustomizableMargin">
                        <C.Content>
                            <C.Figure>
                                <div>
                                    <img src="/icon-fully-customizable.svg" alt="fully-customizable" />
                                </div>
                            </C.Figure>

                            <h3>Fully Customizable</h3>
                            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                        </C.Content>
                    </C.Article>
                </C.Section>
            </C.Main>
        </C.Container>
    )
}
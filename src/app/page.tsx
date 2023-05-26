import Image from 'next/image'
import { Header, IconContainer } from './styles'

import yellowLogo from '../assets/yellowLogo.png'
import { GitHubButton } from '@/components/GitHubButton'
import { Navigation } from '@/components/Navigation'
import { headerLinks } from '@/config/headerLink'
import { Text } from '@/components/Text'

export default function Home() {
  return (
    <main>
      <Header>
        <IconContainer>
          <Image src={yellowLogo} width={40} height={40} alt="" />
          <Text fontFamily="titleText" fontSize="lg">
            Empower code
          </Text>
        </IconContainer>

        <Navigation links={headerLinks} />

        <GitHubButton />
      </Header>
      <h1>home</h1>
    </main>
  )
}

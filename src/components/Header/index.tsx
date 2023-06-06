import Image from 'next/image'
import { headerStyles, iconContainerStyles } from './styles'
import { Text } from '../Text'
import { Navigation } from '../Navigation'
import { headerLinks } from '@/config/headerLink'
import yellowLogo from '../../assets/yellowLogo.png'
import { GitHubButton } from './components/GitHubButton'

export function Header() {
  return (
    <header className={headerStyles()}>
      <div className={iconContainerStyles()}>
        <Image src={yellowLogo} width={40} height={40} alt="" />

        <Text fontFamily="titleText" fontSize="lg">
          Empower code
        </Text>
      </div>

      <Navigation links={headerLinks} />

      <GitHubButton />
    </header>
  )
}

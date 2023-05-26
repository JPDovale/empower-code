'use client'
import { usePathname } from 'next/navigation'
import { Link } from '../Link'
import { NavigationContainer } from './styles'

interface ILink {
  href: string
  text: string
}

interface INavigationProps {
  links?: ILink[]
}

export function Navigation({ links = [] }: INavigationProps) {
  const pathname = usePathname()

  return (
    <NavigationContainer>
      {links.map((link) => (
        <Link key={link.href} href={link.href} onPage={pathname}>
          {link.text}
        </Link>
      ))}
    </NavigationContainer>
  )
}

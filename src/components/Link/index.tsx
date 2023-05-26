import { ComponentProps } from 'react'
import { LinkContainer } from './styles'

interface ILinkProps extends ComponentProps<typeof LinkContainer> {
  onPage: string
}

export function Link({ onPage, ...props }: ILinkProps) {
  return <LinkContainer {...props} active={props.href === onPage} />
}

import { VariantProps } from 'class-variance-authority'
import { linkStyles } from './styles'
import NextLink from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface ILinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkStyles> {
  onPage: string | null
  href: string
}

export function Link({ onPage, ...props }: ILinkProps) {
  return (
    <NextLink
      className={linkStyles({
        active: onPage === props.href,
      })}
      {...props}
    />
  )
}

'use client'
import * as AvatarRadix from '@radix-ui/react-avatar'
import { cva } from 'class-variance-authority'

const avatarContainerStyles = cva([
  'min-w-64',
  'min-h-64',
  'max-w-64',
  'max-h-64',
  'rounded-full',
  'overflow-hidden',
])

const avatarImageStyles = cva([
  'min-w-64',
  'min-h-64',
  'max-w-64',
  'max-h-64',
  'rounded-full',
  'border-2',
  'border-yellow500',
  'shadow-lg',
  'shadow-semiTransparent',
])

interface IAvatarProps {
  src: string
  alt: string
}

export function Avatar({ alt, src }: IAvatarProps) {
  return (
    <AvatarRadix.Root className={avatarContainerStyles()}>
      <AvatarRadix.Image alt={alt} src={src} className={avatarImageStyles()} />
    </AvatarRadix.Root>
  )
}

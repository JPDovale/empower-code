'use client'
import { Alien } from '@/config/Icons'
import * as AvatarRadix from '@radix-ui/react-avatar'
import { cva } from 'class-variance-authority'

const avatarContainerStyles = cva([
  'flex',
  'justify-center',
  'items-center',
  'min-w-[16rem]',
  'min-h-[16rem]',
  'max-w-[16rem]',
  'max-h-[16rem]',
  'rounded-full',
  'overflow-hidden',
])

const avatarImageStyles = cva([
  'min-w-[16rem]',
  'min-h-[16rem]',
  'max-w-[16rem]',
  'max-h-[16rem]',
  'rounded-full',
  'border-2',
  'border-yellow500',
  'shadow-lg',
  'shadow-semiTransparent',
])

const avatarFallback = cva([
  'flex',
  'justify-center',
  'items-center',
  'min-w-[16rem]',
  'min-h-[16rem]',
  'max-w-[16rem]',
  'max-h-[16rem]',
  'rounded-full',
  'border-2',
  'border-yellow500',
])

interface IAvatarProps {
  src: string
  alt: string
}

export function Avatar({ alt, src }: IAvatarProps) {
  return (
    <AvatarRadix.Root className={avatarContainerStyles()}>
      <AvatarRadix.Image alt={alt} src={src} className={avatarImageStyles()} />

      <AvatarRadix.Fallback className={avatarFallback()}>
        <Alien weight="fill" size={120} />
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}

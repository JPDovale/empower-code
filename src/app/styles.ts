import { cva } from 'class-variance-authority'

export const containerStyles = cva([
  'flex',
  'flex-col',
  'gap-4',
  'mt-8',
  'w-full',
  'max-w-screen-lg',
  'mx-auto',
  'my-4',
  'p-4',
])

export const buttonStyles = cva([
  'self-start',
  'border-[1px]',
  'border-solid',
  'border-yellow500',
  'p-0',
  'rounded-md',
])

export const buttonTextStyles = cva(['px-32', 'py-2'])

export const skillsContainerStyles = cva(['grid', 'grid-cols-3', 'gap-4'])

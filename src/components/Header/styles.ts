import { cva } from 'class-variance-authority'

export const headerStyles = cva([
  'flex',
  'justify-between',
  'items-center',
  'gap-4',
  'px-4',
  'w-screen',
  'fixed',
  'bg-semiTransparent',
  'backdrop-blur-md',
  'shadow-defaultDown',
  'z-50',
])

export const iconContainerStyles = cva(['flex', 'items-center', 'gap-2'])

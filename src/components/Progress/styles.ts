import { cva } from 'class-variance-authority'

export const progressBarStyles = cva([
  'bg-gray900',
  'w-full',
  'h-2',
  'overflow-hidden',
  'rounded-md',
  'shadow-sm',
  'shadow-semiTransparent',
])

export const progressBarIndicatorStyle = cva(['h-full', 'w-full'])

import { cva } from 'class-variance-authority'

export const buttonStyles = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'gap-3',
    'ease-in-out',
    'duration-default',
  ],
  {
    variants: {
      hoverColor: {
        default: ['hover:text-yellow500'],
        youtube: ['hover:text-red600'],
        github: ['hover:text-green500'],
        linkedin: ['hover:text-blue300'],
      },
    },

    defaultVariants: {
      hoverColor: 'default',
    },
  },
)

export const iconContainerStyles = cva('leading-0')

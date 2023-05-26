import { styled } from '@/styles'

export const TextContainer = styled('p', {
  variants: {
    fontSize: {
      '2xs': {
        fontSize: '0.25rem',
      },
      xs: {
        fontSize: '0.5rem',
      },
      sm: {
        fontSize: '0.75rem',
      },
      md: {
        fontSize: '1rem',
      },
      lg: {
        fontSize: '1.25rem',
      },
      xl: {
        fontSize: '1.5rem',
      },
      '2xl': {
        fontSize: '1.75rem',
      },
      '3xl': {
        fontSize: '2rem',
      },
      '4xl': {
        fontSize: '2.5rem',
      },
    },
    fontFamily: {
      bodyText: {
        fontFamily: '$body',
      },
      titleText: {
        fontFamily: '$title',
      },
    },
  },

  defaultVariants: {
    fontSize: 'md',
    fontFamily: 'bodyText',
  },
})

import { cva } from 'class-variance-authority'

export const textStyles = cva([], {
  variants: {
    fontSize: {
      '2xs': ['text-3xs'],
      xs: ['text-xxs'],
      sm: ['text-xs'],
      md: ['text-base'],
      lg: ['text-xl'],
      xl: ['text-2xl'],
      '2xl': ['text-3xl'],
      '3xl': ['text-4xl'],
    },
    fontFamily: {
      bodyText: ['font-body'],
      titleText: ['font-title'],
    },
  },

  defaultVariants: {
    fontFamily: 'bodyText',
    fontSize: 'md',
  },
})

// export const TextContainer = styled('p', {
//   variants: {
//     fontFamily: {
//       bodyText: {
//         fontFamily: '$body',
//       },
//       titleText: {
//         fontFamily: '$title',
//       },
//     },
//   },

//   defaultVariants: {
//     fontSize: 'md',
//     fontFamily: 'bodyText',
//   },
// })

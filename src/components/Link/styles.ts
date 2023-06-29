import { cva } from 'class-variance-authority'

export const linkStyles = cva(
  [
    'flex',
    'justify-center',
    'items-center',
    'leading-0',
    'py-2',
    'px-8',
    'border-0',
    'border-b-2',
    'border-solid',
    'border-transparent',
    'duration-default',
    'ease-in-out',
    'h-10',
    'hover:bg-gradientButton',
    'hover:animate-bg-button-fade-out',
  ],
  {
    variants: {
      active: {
        true: ['border-b-yellow500'],
        false: [],
      },
    },

    defaultVariants: {
      active: false,
    },
  },
)

// export const LinkContainer = styled(Link, {
//   all: 'unset',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',

//   padding: '0.5rem 2rem',
//   borderBottom: '1px solid $transparent',
//   height: '2.5rem',
//   cursor: 'pointer',
//   transition: '$default',

//   '&:hover': {
//     background: '$gray800',
//   },

//   variants: {
//     active: {
//       true: {
//         borderBottomColor: '$yellow500',
//       },
//       false: {},
//     },
//   },

//   defaultVariants: {
//     active: false,
//   },
// })

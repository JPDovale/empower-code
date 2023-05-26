import { styled } from '@/styles'
import Link from 'next/link'

export const LinkContainer = styled(Link, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '0.5rem 2rem',
  borderBottom: '1px solid $transparent',
  height: '2.5rem',
  cursor: 'pointer',
  transition: '$default',

  '&:hover': {
    background: '$gray800',
  },

  variants: {
    active: {
      true: {
        borderBottomColor: '$yellow500',
      },
      false: {},
    },
  },

  defaultVariants: {
    active: false,
  },
})

import { styled } from '@/styles'

export const GitHubButtonContainer = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: '$default',

  gap: '1rem',

  '&:hover': {
    color: '$green500',
  },

  svg: {
    lineHeight: 0,
  },
})

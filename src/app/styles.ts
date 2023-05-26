import { styled } from '@/styles'

export const Header = styled('header', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1rem',

  img: {
    width: 40,
    height: 40,
  },
})

export const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
})

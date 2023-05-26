import { createStitches } from '@stitches/react'

export const { config, css, getCssText, globalCss, styled } = createStitches({
  theme: {
    colors: {
      transparent: '#00000000',

      white: '#ffffff',
      black: '#000000',

      gray900: '#121214',
      gray800: '#161624',

      yellow500: '#ffab04',

      green500: '#6cc644',
    },

    fonts: {
      body: 'var(--font-roboto)',
      title: 'var(--font-bungee)',
    },

    transitions: {
      default: 'ease-in-out 250ms',
    },
  },
})

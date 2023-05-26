import { ComponentProps } from 'react'
import { TextContainer } from './styles'

interface ITextProps extends ComponentProps<typeof TextContainer> {}

export function Text({ ...rest }: ITextProps) {
  return <TextContainer {...rest} />
}

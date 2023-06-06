import { Slot } from '@radix-ui/react-slot'
import { VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'
import { textStyles } from './styles'

interface ITextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textStyles> {
  asChild?: boolean
}

export function Text({
  asChild = false,
  fontFamily,
  fontSize,
  ...rest
}: ITextProps) {
  const TextComponent = asChild ? Slot : 'p'

  return (
    <TextComponent
      className={textStyles({
        fontFamily,
        fontSize,
      })}
      {...rest}
    />
  )
}

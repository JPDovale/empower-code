import { VariantProps } from 'class-variance-authority'
import { Text as TextComponent } from '../Text'
import { buttonStyles, iconContainerStyles } from './styles'
import { ButtonHTMLAttributes, ComponentProps, HTMLAttributes } from 'react'

interface IButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

function Root({ hoverColor, ...props }: IButtonRootProps) {
  return (
    <button
      {...props}
      className={`${buttonStyles({ hoverColor })} ${props.className}`}
    />
  )
}

Root.displayName = 'Button.Root'

interface IButtonIconProps extends HTMLAttributes<HTMLDivElement> {}

function Icon({ ...props }: IButtonIconProps) {
  return <div className={iconContainerStyles()} {...props} />
}

Icon.displayName = 'Button.Icon'

interface IButtonTextProps extends ComponentProps<typeof TextComponent> {}

function Text({ ...props }: IButtonTextProps) {
  return <TextComponent {...props} />
}

Text.displayName = 'Button.Text'

export { Root, Icon, Text }

import { cva } from 'class-variance-authority'

export const skillCardStyles = cva([
  'bg-gray800',
  'p-4',
  'rounded-md',
  'flex',
  'flex-col',
  'items-center',
  'gap-2',
  'cursor-pointer',
  'border-[1px]',
  'border-transparent',
  'hover:border-yellow500',
  'ease-in-out',
  'duration-300',
])

export const skillNameStyles = cva(['font-bold', 'opacity-60'])

export const skillImageStyles = cva(
  [
    'min-h-[2.5rem]',
    'min-w-[2.5rem]',
    'max-h-[2.5rem]',
    'max-w-[2.5rem]',
    'h-10',
    'w-10',
    'object-contain',
  ],
  {
    variants: {
      size: {
        lg: [
          'min-h-[5rem]',
          'min-w-[5rem]',
          'max-h-[5rem]',
          'max-w-[5rem]',
          'h-20',
          'w-20',
        ],
      },
    },
  },
)

export const hoverSkillCardContent = cva([
  'border-[1px]',
  'border-yellow500',
  'p-4',
  'bg-gray900',
  'shadow-2xl',
  'shadow-black',
  'max-w-xl',
  'rounded-lg',
  'flex',
  'flex-col',
  'gap-4',
  'ease-in-out',
  'duration-300',
])

export const hoverSkillCardArrow = cva(['fill-yellow500'])

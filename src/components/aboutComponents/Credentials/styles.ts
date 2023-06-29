import { cva } from 'class-variance-authority'

export const infosAndAvatarUserStyles = cva([
  'flex',
  'gap-4',
  'items-center',
  'justify-between',
])

export const infosUserStyles = cva(['flex', 'flex-col', 'gap-4', 'px-6'])

export const infoTitleStyles = cva(['text-sm', 'opacity-40', 'font-bold'])

export const infoDescriptionStyles = cva(['text-md', 'text-justify'])

export const infoContainerStyles = cva(['flex', 'w-full', 'flex-col', 'gap-1'])

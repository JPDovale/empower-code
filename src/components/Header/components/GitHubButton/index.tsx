'use client'
import * as Button from '@/components/Button'
import { GitHubLogoIcon } from '@/config/Icons'
import { useRouter } from 'next/navigation'

export function GitHubButton() {
  const router = useRouter()

  return (
    <Button.Root
      hoverColor="github"
      onClick={() => router.push('https://github.com/JPDovale')}
    >
      <Button.Text>JPdovale</Button.Text>
      <Button.Icon>
        <GitHubLogoIcon size={24} />
      </Button.Icon>
    </Button.Root>
  )
}

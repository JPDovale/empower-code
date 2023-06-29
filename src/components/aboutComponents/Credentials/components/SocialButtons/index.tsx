'use client'
import * as Button from '@/components/Button'
import { GithubLogo, LinkedinLogo, YoutubeLogo } from '@/config/Icons'
import { socialButtonsContainerStyles } from './styles'
import { useRouter } from 'next/navigation'

interface ISocialButtonsProps {
  linkedinUrl: string
  youtubeUrl: string
  githubUrl: string
}

export function SocialButtons({
  githubUrl,
  linkedinUrl,
  youtubeUrl,
}: ISocialButtonsProps) {
  const router = useRouter()

  return (
    <div className={socialButtonsContainerStyles()}>
      <Button.Root
        hoverColor="linkedin"
        onClick={() => router.push(linkedinUrl)}
      >
        <Button.Icon>
          <LinkedinLogo size={24} />
        </Button.Icon>

        <Button.Text asChild>
          <span>Linkedin</span>
        </Button.Text>
      </Button.Root>

      <Button.Root hoverColor="youtube" onClick={() => router.push(youtubeUrl)}>
        <Button.Icon>
          <YoutubeLogo size={24} />
        </Button.Icon>

        <Button.Text asChild>
          <span>YouTube</span>
        </Button.Text>
      </Button.Root>

      <Button.Root hoverColor="github" onClick={() => router.push(githubUrl)}>
        <Button.Icon>
          <GithubLogo size={24} />
        </Button.Icon>

        <Button.Text asChild>
          <span>GitHub</span>
        </Button.Text>
      </Button.Root>
    </div>
  )
}

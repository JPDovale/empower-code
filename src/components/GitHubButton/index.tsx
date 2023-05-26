'use client'

import { GithubLogo } from '@phosphor-icons/react'
import { GitHubButtonContainer } from './styles'
import { Text } from '../Text'
import { useRouter } from 'next/navigation'

export function GitHubButton() {
  const router = useRouter()

  return (
    <GitHubButtonContainer
      onClick={() => router.push('https://github.com/JPDovale')}
    >
      <GithubLogo size={26} />

      <Text>JPDovale</Text>
    </GitHubButtonContainer>
  )
}

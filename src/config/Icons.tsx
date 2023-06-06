'use client'
import {
  GithubLogo,
  IconProps,
  LinkedinLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'

function GitHubLogoIcon(props: IconProps) {
  return <GithubLogo {...props} />
}

function YouTubeLogoIcon(props: IconProps) {
  return <YoutubeLogo {...props} />
}

function LinkedinLogoIcon(props: IconProps) {
  return <LinkedinLogo {...props} />
}

export { GitHubLogoIcon, YouTubeLogoIcon, LinkedinLogoIcon }

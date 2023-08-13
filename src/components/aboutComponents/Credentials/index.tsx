import { Avatar } from '@/components/Avatar'
import { SocialButtons } from './components/SocialButtons'
import {
  infoContainerStyles,
  infoDescriptionStyles,
  infoTitleStyles,
  infosAndAvatarUserStyles,
  infosUserStyles,
} from './styles'
import { socialLinks } from '@/config/socialLinks'
import { gitHubApi } from '@/services/apis/gitHub'

interface IUserFromGitHubData {
  login: string
  avatar_url: string
  name: string
  location: string
  bio: string
}

export async function Credentials() {
  const response = await gitHubApi.get('/users/JPDovale')
  const userFromGitHub = response.data as IUserFromGitHubData

  return (
    <div className={`htmlContent ${infosAndAvatarUserStyles()}`}>
      <Avatar src={userFromGitHub.avatar_url} alt={userFromGitHub.name} />

      <div className={infosUserStyles()}>
        <div className={infoContainerStyles()}>
          <span className={infoTitleStyles()}>Nome</span>
          <h4 className={infoDescriptionStyles()}>{userFromGitHub.name}</h4>
        </div>

        <div className={infoContainerStyles()}>
          <span className={infoTitleStyles()}>Cidade</span>
          <h4 className={infoDescriptionStyles()}>{userFromGitHub.location}</h4>
        </div>

        <div className={infoContainerStyles()}>
          <span className={infoTitleStyles()}>Biografia</span>
          <h4 className={infoDescriptionStyles()}>{userFromGitHub.bio}</h4>
        </div>

        <div className={infoContainerStyles()}>
          <span className={infoTitleStyles()}>Redes sociais</span>

          <SocialButtons
            githubUrl={socialLinks.gitHubUrl}
            linkedinUrl={socialLinks.linkedinUrl}
            youtubeUrl={socialLinks.youTubeUrl}
          />
        </div>
      </div>
    </div>
  )
}

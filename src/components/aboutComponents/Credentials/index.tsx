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
// import { gitHubApi } from '@/services/apis/gitHub'

// interface IUserFromGitHubData {
//   login: string
//   avatar_url: string
//   name: string
//   location: string
//   bio: string
// }

export function Credentials() {
  // const response = await gitHubApi.get('/users/JPDovale')
  // const userFromGitHub = response.data as IUserFromGitHubData

  return (
    <div className={`htmlContent ${infosAndAvatarUserStyles()}`}>
      <Avatar
        src={
          'https://avatars.githubusercontent.com/u/100259992?v=4'
          // userFromGitHub.avatar_url
        }
        alt={
          'João Paulo'
          // userFromGitHub.name
        }
      />

      <div className={infosUserStyles()}>
        <div className={infoContainerStyles()}>
          <span className={infoTitleStyles()}>Nome</span>
          <h4 className={infoDescriptionStyles()}>
            João Paulo do Vale
            {/* {userFromGitHub.name} */}
          </h4>
        </div>

        <div className={infoContainerStyles()}>
          <span className={infoTitleStyles()}>Cidade</span>
          <h4 className={infoDescriptionStyles()}>
            Curitiba - Pr - BR
            {/* {userFromGitHub.location} */}
          </h4>
        </div>

        <div className={infoContainerStyles()}>
          <span className={infoTitleStyles()}>Biografia</span>
          <h4 className={infoDescriptionStyles()}>
            Desenvolvedor pleno full-stack especializado em JavaScript...
            Interesse em Java e conceitos de segurança.
            {/* {userFromGitHub.bio} */}
          </h4>
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

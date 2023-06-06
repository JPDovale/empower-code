import { asHTML, asLink } from '@prismicio/client'
import { createClient } from '../../../prismicio'
import {
  aboutPageStyles,
  infoContainerStyles,
  infoDescriptionStyles,
  infoTitleStyles,
  infosAndAvatarUserStyles,
  infosUserStyles,
} from './styles'
// import { gitHubApi } from '@/services/apis/gitHub'
import { Avatar } from '@/components/Avatar'
import { SocialButtons } from './components/SocialButtons'

// interface IUserFromGitHubData {
//   login: string
//   avatar_url: string
//   name: string
//   location: string
//   bio: string
// }

export default async function AboutPage() {
  // const response = await gitHubApi.get('/users/JPDovale')
  // const userFromGitHub = response.data as IUserFromGitHubData

  const prismic = createClient()
  const about = await prismic.getByUID('about', 'aboutme')

  const content = asHTML(about.data.content)
  const linkedinUrl = asLink(about.data.linkedin)
  const youTubeUrl = asLink(about.data.youtube)
  const gitHubUrl = asLink(about.data.github)

  return (
    <main className={aboutPageStyles()}>
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
            <span className={infoTitleStyles()}>Redes sócias</span>

            <SocialButtons
              githubUrl={gitHubUrl!}
              linkedinUrl={linkedinUrl!}
              youtubeUrl={youTubeUrl!}
            />
          </div>
        </div>
      </div>

      <article
        className="htmlContent"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  )
}

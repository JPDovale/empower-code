import { asHTML } from '@prismicio/client'
import { createClient } from '../../../prismicio'
import { aboutPageStyles } from './styles'
import { Credentials } from '@/components/aboutComponents/Credentials'

export default async function AboutPage() {
  const prismic = createClient()
  const about = await prismic.getByUID('about', 'aboutme')

  const content = asHTML(about.data.content)

  return (
    <main className={aboutPageStyles()}>
      {/* @ts-expect-error */}
      <Credentials />

      <article
        className="htmlContent"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  )
}

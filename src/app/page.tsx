import { Text } from '@/components/Text'
import { Credentials } from '@/components/aboutComponents/Credentials'
import {
  buttonStyles,
  buttonTextStyles,
  containerStyles,
  skillsContainerStyles,
} from './styles'
import * as Button from '@/components/Button'
import Link from 'next/link'
import { createClient } from '../../prismicio'
import { asText } from '@prismicio/richtext'
import { SkillCard } from '@/components/SkillCard'

interface ISkillData {
  title: string
  description: string
  abilityLevel: number
  techColor: string
  icon: {
    alt: string
    url: string
  }
}

interface ISKillResponse {
  title: string
  description: string
  skills: ISkillData[]
}

export default async function Home() {
  const prismic = createClient()
  const response = await prismic.getByUID('skils', 'skills')

  const dataSkills: ISKillResponse = {
    title: response.data.title!,
    description: asText(response.data.description),
    skills: response.data.skils.map((skill) => ({
      title: skill.title!.toString(),
      description: asText(skill.description),
      abilityLevel: Number(skill.ability_level),
      icon: {
        url: skill.icon.url!.toString(),
        alt: skill.icon.alt?.toString() ?? '',
      },
      techColor: skill.tech_color!.toString(),
    })),
  }

  return (
    <main className="pt-16">
      <div className={`${containerStyles()}`}>
        <Text fontFamily="titleText" fontSize="2xl">
          UM POUCO SOBRE MIM:
        </Text>

        <Credentials />

        <Button.Root className={buttonStyles()}>
          <Button.Text className={buttonTextStyles()} asChild>
            <Link href={'/about'}>Mais</Link>
          </Button.Text>
        </Button.Root>
      </div>

      <div className={containerStyles()}>
        <Text fontFamily="titleText" fontSize="2xl">
          {dataSkills.title}:
        </Text>

        <div className={skillsContainerStyles()}>
          {dataSkills.skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
    </main>
  )
}

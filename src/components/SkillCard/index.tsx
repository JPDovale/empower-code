'use client'

import Image from 'next/image'
import * as HoverCard from '@radix-ui/react-hover-card'
import { ProgressBar } from '../Progress'
import { Text } from '../Text'
import {
  hoverSkillCardArrow,
  hoverSkillCardContent,
  skillCardStyles,
  skillImageStyles,
  skillNameStyles,
} from './styles'

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

interface ISkillCardProps {
  skill: ISkillData
}

export function SkillCard({ skill }: ISkillCardProps) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <div className={skillCardStyles()}>
          <Text asChild>
            <span className={skillNameStyles()}>{skill.title}</span>
          </Text>

          <Image
            className={skillImageStyles()}
            src={skill.icon.url}
            alt={skill.icon.url}
            width={40}
            height={40}
          />

          <Text fontSize="sm">{skill.description.slice(0, 60)}...</Text>

          <ProgressBar progress={skill.abilityLevel} color={skill.techColor} />
        </div>
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content className={hoverSkillCardContent()}>
          <Image
            className={skillImageStyles({ size: 'lg' })}
            src={skill.icon.url}
            alt={skill.icon.url}
            width={80}
            height={80}
          />
          
          <Text fontSize="lg" asChild>
            <span className={skillNameStyles()}>{skill.title}</span>
          </Text>

          <Text>{skill.description}...</Text>

          <HoverCard.HoverCardArrow className={hoverSkillCardArrow()} />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}

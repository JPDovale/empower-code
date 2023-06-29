'use client'
import * as Progress from '@radix-ui/react-progress'
import { progressBarIndicatorStyle, progressBarStyles } from './styles'

interface IProgressBarProps {
  progress: number
  color: string
}

export function ProgressBar({ progress, color }: IProgressBarProps) {
  return (
    <Progress.Root className={progressBarStyles()} value={progress}>
      <Progress.Indicator
        className={`${progressBarIndicatorStyle()}`}
        style={{
          transform: `translateX(-${100 - progress}%)`,
          background: `${color}`,
        }}
      />
    </Progress.Root>
  )
}

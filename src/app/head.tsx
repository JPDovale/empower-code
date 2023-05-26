import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/global'

globalStyles()
export default function Head() {
  return (
    <head>
      <style
        id="stitches"
        dangerouslySetInnerHTML={{
          __html: `${getCssText()} `,
        }}
      />
    </head>
  )
}

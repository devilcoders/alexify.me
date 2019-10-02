// --- Dependencies
import { theme } from '@chakra-ui/core'
import colors from 'open-color/open-color.json'

export default {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: 'Inter, system-ui, sans-serif',
    mono: '"League Mono", monospace'
  },
  colors: {
    ...theme.colors,
    ...colors
  }
}

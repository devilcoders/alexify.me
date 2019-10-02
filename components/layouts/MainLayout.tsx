// --- Dependencies
import * as React from 'react'
import Head from 'next/head'
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Box
} from '@chakra-ui/core'

// --- Styles
import theme from '../../lib/theme'

// --- Components
import Header from '../elements/Header'

// --- Styles
import '../../public/fonts/fonts.css'

/**
 * Types
 */

interface IProps {
  title: string
  children: React.ReactNode
}

/**
 * Component
 */

const MainLayout: React.FC<IProps> = ({ title, children }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <Head>
        <title>{title} :: Alexey Topolyanskiy</title>
      </Head>
      <Box as="main" fontFamily="body" bg="black.300">
        <Header />
        <Box maxWidth="60rem" mx="auto" px={3}>
          {children}
        </Box>
      </Box>
    </ColorModeProvider>
  </ThemeProvider>
)

export default React.memo(MainLayout)

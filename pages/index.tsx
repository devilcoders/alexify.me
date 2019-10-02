// --- Dependencies
import * as React from 'react'
import { Text } from '@chakra-ui/core'

// --- Components
import Layout from '../components/layouts/MainLayout'
import AboutMe from '../components/elements/AboutMe'

/**
 * Component
 */

const HomePage = () => <Layout title="Welcome">
  <AboutMe />
</Layout>

export default HomePage;
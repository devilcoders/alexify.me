// --- Components
import Education from 'components/sections/Education'
import Layout from 'components/layouts/MainLayout'
import AboutMe from 'components/sections/AboutMe'

/**
 * Component
 */

const HomePage = () => (
  <Layout title="Welcome">
    <AboutMe />
    <Education />
  </Layout>
)

export default HomePage

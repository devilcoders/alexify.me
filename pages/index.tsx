// --- Components
import { Education, AboutMe, Employment } from 'components/sections'
import Layout from 'components/layouts/MainLayout'

/**
 * Component
 */

const HomePage = () => (
  <Layout title="Welcome">
    <div className="space-y-32">
      <AboutMe />
      <Education />
      <Employment />
    </div>
  </Layout>
)

export default HomePage

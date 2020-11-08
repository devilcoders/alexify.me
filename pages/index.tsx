// --- Components
import { Education, AboutMe, Employment } from 'components/sections'
import Layout from 'components/layouts/MainLayout'

/**
 * Component
 */

const HomePage = () => (
  <Layout title="Welcome">
    <div className="divide-y divide-gray-1">
      <AboutMe />
      <Education />
      <Employment />
    </div>
  </Layout>
)

export default HomePage

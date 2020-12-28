// --- Components
import { Education, AboutMe, Employment } from 'components/sections'
import { MainLayout } from 'components/layouts/MainLayout'

/**
 * Component
 */

const HomePage = () => (
  <MainLayout title="Welcome">
    <div className="divide-y divide-gray-1">
      <AboutMe />
      <Education />
      <Employment />
    </div>
  </MainLayout>
)

export default HomePage

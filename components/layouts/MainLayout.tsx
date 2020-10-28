// --- Dependencies
import Head from 'next/head'

// --- Components
import Header from '../elements/Header'
import Sidebar from '../elements/Sidebar'

/**
 * Types
 */

type Props = {
  title: string
  children: React.ReactNode
}

/**
 * Component
 */

const MainLayout: React.FC<Props> = ({ title, children }) => (
  <>
    <Head>
      <title>{title} :: Alexey Topolyanskiy</title>
    </Head>
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex px-10 flex-1">
        <Sidebar />
        <main className="text-gray-7 ml-10">{children}</main>
      </div>
    </div>
  </>
)

export default MainLayout

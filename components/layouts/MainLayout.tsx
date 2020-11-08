// --- Dependencies
import Head from 'next/head'

// --- Components
import Header from '../elements/Header'

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
      <main className="px-10 max-w-7xl w-full mt-24">{children}</main>
    </div>
  </>
)

export default MainLayout

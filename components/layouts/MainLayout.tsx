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
      <main className="ml-32 pl-4 mt-24">{children}</main>
    </div>
  </>
)

export default MainLayout

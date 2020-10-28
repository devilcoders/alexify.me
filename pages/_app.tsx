// --- Dependencies
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

// --- Types
import type { AppProps } from 'next/app'

// --- Styles
import '../assets/css/fonts.css'
import '../assets/css/app.css'

/**
 * Helpers
 */

const handleExitComplete = () =>
  typeof window !== 'undefined' && window.scrollTo({ top: 0 })

/**
 * Component
 */

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <div className="antialiased font-sans bg-gray-9 min-h-screen text-gray-0">
        <Component {...pageProps} key={router.route} />
      </div>
    </AnimatePresence>
  )
}

export default MyApp

// --- Dependencies
import Link from 'next/link'
import Image from 'next/image'

// --- Components

import { Social } from 'components/elements'

/**
 * Component
 */

const Header = () => (
  <header className="w-full px-10 pt-10 md:pb-24 max-w-7xl md:sticky top-0 z-50  dark:from-gray-9 dark:via-gray-9 bg-gradient-to-b from-white via-white to-transparent">
    <div className="items-center flex justify-between flex-col space-y-6 md:space-y-0 md:flex-row">
      <Link href="/">
        <a className="flex flex-col md:flex-row space-y-6 md:space-y-0 items-center md:space-x-6 text-gray-7 dark:text-gray-6 dark:hover:text-white transition-colors duration-300 ease-in-out">
          <Image
            width="80"
            height="80"
            className="rounded-full"
            src="/images/avatar.jpg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold">Alexey Topolyanskiy</h1>
            <h2 className="text-lg">Web Designer & Developer</h2>
          </div>
        </a>
      </Link>

      <Social />
    </div>
  </header>
)

export default Header

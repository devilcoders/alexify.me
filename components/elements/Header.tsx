// --- Dependencies
import Link from 'next/link'
import Image from 'next/image'

// --- Components
import Nav from './Nav'

/**
 * Component
 */

const Header = () => (
  <header className="w-full p-10 max-w-7xl mx-auto sticky top-0 z-50">
    <div className="items-center flex justify-between">
      <Link href="/">
        <a>
          <Image
            width="96"
            height="96"
            className="rounded-full w-24 h-24"
            src="/images/avatar.jpg"
          />
        </a>
      </Link>

      <Nav />
    </div>
  </header>
)

export default Header

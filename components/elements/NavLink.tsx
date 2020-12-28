// --- Dependencies
import Link from 'next/link'

/**
 * Types
 */

interface IProps {
  id?: number
  href: string
  children: React.ReactNode
}

/**
 * Component
 */

export const NavLink: React.FC<IProps> = ({ id, href, children }) => (
  <Link href={href}>
    <a
      id={String(id)}
      className="relative z-10 font-medium flex items-end text-lg text-gray-6 transition-colors duration-300 ease-in-out hover:text-gray-0"
    >
      {children}
    </a>
  </Link>
)

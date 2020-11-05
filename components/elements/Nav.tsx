// --- Components
import NavLink from './NavLink'

// --- Data
import { Sections } from 'data/sections'

// --- Hooks
import { useActiveSection } from 'hooks/store'

/**
 * Component
 */

const Nav = () => {
  const [activeSection] = useActiveSection()

  return (
    <nav className="relative flex-1">
      <div className="flex justify-end font-mono p-6 font-medium uppercase space-x-8">
        <NavLink href="/">About</NavLink>
        <NavLink href="/#education">Education</NavLink>
        <NavLink href="/#employment">Employment</NavLink>
        <NavLink href="/#contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Nav

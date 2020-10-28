// --- Components
import NavLink from './NavLink'

// --- Data
import { Sections } from 'data/sections'

// --- Hooks
import { useActiveSection } from 'hooks/store'

/**
 * Helpers
 */

const isActive = (section: Sections, activeSection: Sections) =>
  section === activeSection

/**
 * Component
 */

const Nav = () => {
  const [activeSection] = useActiveSection()

  return (
    <nav className="relative flex-1">
      <div className="flex justify-end font-mono p-6 font-medium uppercase space-x-8">
        <NavLink isActive={isActive()} href="/">
          About
        </NavLink>
        <NavLink isActive={isActive} href="/#education">
          Education
        </NavLink>
        <NavLink isActive={isActive} href="/#employment">
          Employment
        </NavLink>
        <NavLink isActive={isActive} href="/#contact">
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav

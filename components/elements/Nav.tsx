// --- Components
import { NavLink } from './NavLink'

/**
 * Component
 */

export const Nav = () => (
  <nav className="relative flex-1">
    <div className="flex justify-end font-mono p-6 font-medium uppercase space-x-8">
      <NavLink href="/">About</NavLink>
      <NavLink href="/#education">Education</NavLink>
      <NavLink href="/#employment">Employment</NavLink>
      <NavLink href="/#contact">Contact</NavLink>
    </div>
  </nav>
)

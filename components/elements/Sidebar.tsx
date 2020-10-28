// --- Icons
import {
  Behance,
  Dribbble,
  Github,
  Soundcloud,
  Unsplash,
} from '@icons-pack/react-simple-icons'

// --- Components
import SocialLink from './SocialLink'

const PROFILES = [
  {
    id: 'github',
    url: 'https://github.com/devilcoders',
    icon: <Github />,
    title: '',
  },
  {
    id: 'dribbble',
    url: 'https://dribbble.com/devilcoders',
    icon: <Dribbble />,
    title: '',
  },
  {
    id: 'soundcloud',
    url: 'https://soundcloud.com/user8060851/sets/kadath',
    icon: <Soundcloud />,
    title: '',
  },
  {
    id: 'behance',
    url: 'https://www.behance.net/devilcoders',
    icon: <Behance />,
    title: '',
  },
  {
    id: 'unsplash',
    url: 'https://unsplash.com/@devilcoders',
    icon: <Unsplash />,
    title: '',
  },
]

/**
 * Component
 */

const Sidebar = () => (
  <aside className="relative w-24">
    <nav className="sticky top-44 text-center flex flex-col items-center space-y-3">
      {PROFILES.map((profile) => (
        <SocialLink {...profile} />
      ))}
    </nav>
  </aside>
)

export default Sidebar

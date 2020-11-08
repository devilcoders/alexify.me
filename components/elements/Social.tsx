// --- Icons
import {
  Behance,
  Dribbble,
  Github,
  Soundcloud,
  Unsplash,
} from '@icons-pack/react-simple-icons'

// --- Components
import { SocialLink } from 'components/elements'

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

export const Social = () => (
  <div className="relative">
    <nav className="sticky top-44 text-center flex items-center space-x-3">
      {PROFILES.map((profile) => (
        <SocialLink key={profile.id} {...profile} />
      ))}
    </nav>
  </div>
)

// --- Types
import type { ReactNode } from 'react'

/**
 * Types
 */

type Props = {
  url: string
  icon: ReactNode
  title: string
}

/**
 * Component
 */

export const SocialLink: React.FC<Props> = ({ url, icon, title }) => (
  <a
    className="group relative z-10 hover:z-50 fill-current  dark:text-gray-7 ease-in-out duration-300 transition-colors hover:text-gray-9 dark:hover:text-gray-0"
    title={title}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <span className="rounded-full flex p-2 relative z-10">{icon}</span>
    <span className="z-0 left-0 top-0 group-hover:animate-ping absolute flex h-full w-full rounded-full group-hover:bg-gray-5 dark:group-hover:bg-gray-8 opacity-25" />
  </a>
)

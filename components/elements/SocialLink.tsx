/**
 * Component
 */

const SocialLink = ({ url, icon, title }) => (
  <a
    className="group relative z-10 hover:z-50 fill-current text-gray-7 ease-in-out duration-300 transition-colors hover:text-gray-0"
    title={title}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
  >
    <span className="bg-gray-9 rounded-full flex p-2 relative z-10">
      {icon}
    </span>
    <span className="z-0 left-0 top-0 group-hover:animate-ping absolute flex h-full w-full rounded-full group-hover:bg-gray-8 opacity-25" />
  </a>
)

export default SocialLink

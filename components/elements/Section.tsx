/**
 * Types
 */

type Props = {
  title: string
}

/**
 * Component
 */

const Section: React.FC<Props> = ({ title, children }) => (
  <section className="flex space-x-8">
    <h1 className="relative z-1 uppercase font-bold dark:text-white w-40">
      {title}
    </h1>

    <div className="relative z-10 max-w-3xl space-y-6">{children}</div>
  </section>
)

export default Section

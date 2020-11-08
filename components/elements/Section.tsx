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
  <section className="grid grid-cols-12 py-24">
    <h1 className="col-start-2 col-span-2 uppercase font-bold dark:text-white">
      {title}
    </h1>

    <div className="col-span-9 relative z-10 space-y-6">{children}</div>
  </section>
)

export default Section

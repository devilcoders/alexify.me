/**
 * Types
 */

type Props = {
  title: string
}

/**
 * Component
 */

export const Section: React.FC<Props> = ({ title, children }) => (
  <section className="flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-12 md:py-24">
    <h1 className="col-start-2 col-span-2 uppercase font-bold dark:text-white">
      {title}
    </h1>

    <div className="col-span-9 relative z-10 space-y-6">{children}</div>
  </section>
)
